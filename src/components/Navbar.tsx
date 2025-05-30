import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ReactDOM from "react-dom";
import logo from "../assets/images/logo-circle.png";
import { NAV_ITEMS } from "../data/NavTabs";
import { COMMITTEE_MAPPINGS } from "../data/CommitteeMappings";

type NavItem = {
  name: string;
  path?: string;
  external?: boolean;
  subItems?: Array<{
    name: string;
    path?: string;
    external?: boolean;
  }>;
};

type SubmenuPosition = {
  name: string;
  position: DOMRect;
} | null;

const VALID_SCHOOLS = [
  "school-of-engineering",
  "school-of-management",
  "vishwabharati-polytechnic-institute",
];

const DEPARTMENT_MAPPINGS: Record<
  string,
  Array<{ name: string; path: string }>
> = {
  "vishwabharati-polytechnic-institute": [
    { name: "Mechanical Engineering", path: "/departments/mechanical/profile" },
    { name: "Civil Engineering", path: "/departments/civil/profile" },
    { name: "Electrical Engineering", path: "/departments/electrical/profile" },
    { name: "Computer Engineering", path: "/departments/computer/profile" },
    { name: "Information Technology", path: "/departments/it/profile" },
    {
      name: "Electronics and Telecommunication",
      path: "/departments/ece/profile",
    },
    {
      name: "Basic Sciences and Humanities (FE)",
      path: "/departments/bsh/profile",
    },
  ],
  "school-of-management": [
    { name: "MBA Program", path: "/departments/mba/profile" },
    
  ],
  "school-of-engineering": [
    {
      name: "Computer Science & Engineering",
      path: "/departments/cse/profile",
    },
    { name: "Mechanical Engineering", path: "/departments/mech/profile" },
    { name: "Electrical Engineering", path: "/departments/eee/profile" },
    { name: "Civil Engineering", path: "/departments/civil/profile" },
    {
      name: "Electronics and Telecommunication Engineering",
      path: "/departments/ece/profile",
    },
    {
      name: "Basic Sciences and Humanities (FE)",
      path: "/departments/bsh/profile",
    },
  ],
};

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [submenuPosition, setSubmenuPosition] = useState<SubmenuPosition>(null);

  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const schoolPrefix = useMemo(() => {
    const parts = pathname.split("/").filter((p) => p);
    return VALID_SCHOOLS.find((school) => school === parts[0]) || null;
  }, [pathname]);

  const getPrefixedPath = useCallback(
    (originalPath: string, isExternal?: boolean) => {
      if (isExternal || !schoolPrefix) return originalPath;
      return originalPath === "/"
        ? `/${schoolPrefix}/home`
        : `/${schoolPrefix}${originalPath}`;
    },
    [schoolPrefix]
  );

  const getCommitteeItems = useCallback(() => {
    if (!schoolPrefix) return [];
    return (
      COMMITTEE_MAPPINGS[schoolPrefix as keyof typeof COMMITTEE_MAPPINGS]?.map(committee => ({
        name: committee.title,
        path: `/cells-committees?section=${committee.id}`
      })) || []
    );
  }, [schoolPrefix]);

  const schoolHeading = useMemo(() => {
    switch (schoolPrefix) {
      case "school-of-management":
        return "School of Management";
      case "school-of-engineering":
        return "School of Engineering";
      case "vishwabharati-polytechnic-institute":
        return "Vishwabharati Polytechnic Institute";
      default:
        return "Matoshri Pratishthan Group of Institutions, Nanded";
    }
  }, [schoolPrefix]);

  const getDepartmentItems = useCallback(() => {
    if (!schoolPrefix) return [];
    return DEPARTMENT_MAPPINGS[schoolPrefix] || [];
  }, [schoolPrefix]);

  const modifiedNavItems = useMemo(() => {
    return NAV_ITEMS.map(item => {
      if (item.name === "Departments") {
        return {
          ...item,
          subItems: getDepartmentItems()
        };
      }
      if (item.name === "Cells & Committees") {
        return {
          ...item,
          subItems: getCommitteeItems()
        };
      }
      return item;
    });
  }, [schoolPrefix, getDepartmentItems, getCommitteeItems]);

  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const closeAllMenus = useCallback(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
    setSubmenuPosition(null);
    cleanup();
  }, [cleanup]);

  const toggleSubmenu = useCallback((name: string) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  }, []);

  const handleDesktopSubmenuHover = useCallback(
    (e: React.MouseEvent, item: NavItem) => {
      if (!item.subItems) return;
      cleanup();
      const rect = e.currentTarget.getBoundingClientRect();
      setSubmenuPosition({ name: item.name, position: rect });
    },
    [cleanup]
  );

  const handleDesktopSubmenuLeave = useCallback(() => {
    cleanup();
    timeoutRef.current = setTimeout(() => setSubmenuPosition(null), 200);
  }, [cleanup]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(
          'button[aria-label="Toggle navigation menu"]'
        )
      ) {
        closeAllMenus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, closeAllMenus]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    const throttleResize = (fn: Function, delay: number) => {
      let lastCall = 0;
      return (...args: any[]) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        fn(...args);
      };
    };

    const throttledUpdate = throttleResize(updateHeaderHeight, 100);

    resizeObserverRef.current = new ResizeObserver(throttledUpdate);
    if (headerRef.current) {
      resizeObserverRef.current.observe(headerRef.current);
    }

    return () => {
      resizeObserverRef.current?.disconnect();
      cleanup();
    };
  }, [cleanup]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const renderSubmenuItems = useCallback(
    (subItems: NavItem["subItems"], isMobile: boolean) =>
      subItems?.map((subItem) => {
        const path = getPrefixedPath(subItem.path || "#", subItem.external);
        const isActive = pathname === path;
        return (
          <li key={subItem.name}>
            {subItem.external ? (
              <a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeAllMenus}
                className={`block ${
                  isMobile ? "px-6 py-3 text-sm" : "px-4 py-2 text-base"
                } font-medium ${
                  isActive
                    ? `${
                        isMobile
                          ? "text-gray-900 bg-blue-100"
                          : "text-gray-900 bg-blue-100"
                      }`
                    : `${
                        isMobile
                          ? "text-gray-600 hover:text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                }`}
              >
                {subItem.name}
              </a>
            ) : (
              <Link
                to={path}
                onClick={closeAllMenus}
                className={`block ${
                  isMobile ? "px-6 py-3 text-sm" : "px-4 py-2 text-base"
                } font-medium ${
                  isActive
                    ? `${
                        isMobile
                          ? "text-gray-900 bg-blue-100"
                          : "text-gray-900 bg-blue-100"
                      }`
                    : `${
                        isMobile
                          ? "text-gray-600 hover:text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                }`}
              >
                {subItem.name}
              </Link>
            )}
          </li>
        );
      }),
    [closeAllMenus, getPrefixedPath, pathname]
  );

  const renderNavItem = useCallback(
    (item: NavItem, isMobile: boolean) => {
      const path = getPrefixedPath(item.path || "", item.external);
      const isActive = pathname === path;

      return item.path ? (
        item.external ? (
          <a
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeAllMenus}
            className={`${
              isMobile ? "px-6 py-3 text-sm" : "px-4 py-2.5 text-base"
            }
              font-medium flex items-center ${
                isActive
                  ? "text-blue-700 underline"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
          >
            {item.name}
          </a>
        ) : (
          <Link
            key={item.name}
            to={path}
            onClick={closeAllMenus}
            className={`${
              isMobile ? "px-6 py-3 text-sm" : "px-4 py-2.5 text-base"
            }
              font-medium flex items-center ${
                isActive
                  ? "text-blue-700 underline"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
          >
            {item.name}
          </Link>
        )
      ) : (
        <div key={item.name} className="relative">
          <button
            onClick={
              isMobile
                ? (e) => {
                    e.stopPropagation();
                    toggleSubmenu(item.name);
                  }
                : undefined
            }
            onMouseEnter={
              !isMobile ? (e) => handleDesktopSubmenuHover(e, item) : undefined
            }
            onMouseLeave={!isMobile ? handleDesktopSubmenuLeave : undefined}
            className={`${
              isMobile ? "w-full px-6 py-3 text-sm" : "px-4 py-2.5 text-base"
            } font-medium flex items-center justify-between gap-1 ${
              (
                isMobile
                  ? openSubmenu === item.name
                  : submenuPosition?.name === item.name
              )
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:bg-gray-50"
            }`}
            aria-expanded={Boolean(
              isMobile
                ? openSubmenu === item.name
                : submenuPosition?.name === item.name
            )}
          >
            <span>{item.name}</span>
            {item.subItems && (
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  (
                    isMobile
                      ? openSubmenu === item.name
                      : submenuPosition?.name === item.name
                  )
                    ? "rotate-180"
                    : ""
                }`}
              />
            )}
          </button>

          {isMobile && openSubmenu === item.name && item.subItems && (
            <ul className="bg-gray-50 pl-6 border-t border-gray-200">
              {renderSubmenuItems(item.subItems, true)}
            </ul>
          )}
        </div>
      );
    },
    [
      pathname,
      openSubmenu,
      submenuPosition,
      getPrefixedPath,
      closeAllMenus,
      toggleSubmenu,
      handleDesktopSubmenuHover,
      handleDesktopSubmenuLeave,
      renderSubmenuItems,
    ]
  );

  return (
    <>
      <header
        ref={headerRef}
        className="fixed w-full top-0 z-50 shadow-lg bg-white"
      >
        {/* Top Section - Logo and Institution Name */}
        <div className="py-2 block bg-mpgin-darkBlue border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-4">
                <Link to="/">
                  <img
                    src={logo}
                    alt="MPGIN Logo"
                    className="h-16 w-16 md:h-20 md:w-20 hover:scale-105 transition-transform duration-200"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </Link>
                <Link
                  to={schoolPrefix ? `/${schoolPrefix}/home` : "/"}
                  className="flex items-center gap-4"
                >
                  <h1 className="text-mpgin-blue font-bold text-xl md:text-2xl lg:text-4xl tracking-tight">
                    {schoolHeading}
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Main Menu */}
        <nav ref={navRef} className="bg-white">
          <div className="overflow-auto w-full px-4 sm:px-6 lg:px-8 flex justify-end lg:justify-start">
            <div className="flex items-center justify-between h-16">
              {/* Desktop Navigation */}
              <div className="hidden md:block flex-1">
                <ul className="flex items-center">
                  {modifiedNavItems.map((item, index) => (
                    <li
                      key={item.name}
                      className={`group relative ${
                        index !== modifiedNavItems.length - 1
                          ? "border-r border-gray-200"
                          : ""
                      }`}
                      onMouseEnter={(e) => handleDesktopSubmenuHover(e, item)}
                      onMouseLeave={handleDesktopSubmenuLeave}
                    >
                      {renderNavItem(item, false)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center ml-auto">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Toggle navigation menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div
              ref={mobileMenuRef}
              className="md:hidden bg-white shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <ul className="divide-y divide-gray-200">
                {modifiedNavItems.map((item) => (
                  <li
                    key={item.name}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {renderNavItem(item, true)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Portal for desktop submenus */}
      {submenuPosition &&
        ReactDOM.createPortal(
          <ul
            className="fixed bg-white shadow-xl rounded-lg min-w-[200px] py-1 border border-gray-200 z-50"
            style={{
              top: `${submenuPosition.position.bottom}px`,
              left: `${submenuPosition.position.left}px`,
            }}
            onMouseEnter={cleanup}
            onMouseLeave={handleDesktopSubmenuLeave}
            aria-label={`${submenuPosition.name} submenu`}
          >
            {renderSubmenuItems(
              modifiedNavItems.find(
                (item) => item.name === submenuPosition.name
              )?.subItems,
              false
            )}
          </ul>,
          document.body
        )}

      {/* Header height spacer */}
      {headerHeight > 0 && <div style={{ height: headerHeight }} />}
    </>
  );
};

export default Navbar;
