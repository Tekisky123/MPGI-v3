import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import NotificationComponent from "../../components/NotificationComponent";
import {
  achievementData,
  navItems,
  placementData,
  profiles,
  nirfData,
  mandatoryDisclosureData,
  iqacData,
  visionMissionData,
  swayamNptelData,
  innovationIncubation,
  homeData,
} from "../../data/SchoolOfEngineeringQuickLinkData";
import lab1 from "../../assets/engineering/lab1.jpg";
import lab2 from "../../assets/engineering/lab2.jpg";
import lab3 from "../../assets/engineering/lab3.jpg";
import lab4 from "../../assets/engineering/lab4.jpg";

const renderTable = (data: any[], headers: string[]) => {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {Object.values(row).map((cell: any, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 whitespace-normal text-sm text-gray-700 border border-gray-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const renderNptelTable = (data: any[]) => {
  const headers = ["Sr No", "Department Name", "No Of Registrations", "Total Registrations"];
  return renderTable(data, headers);
};

const renderInnovationTable = (data: any[]) => {
  const headers = ["Sr No", "Name", "Designation", "Role"];
  return renderTable(data, headers);
};

const renderImage = (imageSrc: string, altText: string) => (
  <div className="my-6 flex justify-center">
    <img
      src={imageSrc}
      alt={altText}
      className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
    />
  </div>
);

const renderList = (listContent: string) => {
  const isList = listContent.startsWith('-');
  if (!isList) {
    return <p className="text-gray-700 leading-relaxed my-3">{listContent}</p>;
  }

  const lines = listContent.split('\n');
  const items = lines.filter(line => line.trim().startsWith('-')).map(item => {
    return item.substring(2);
  });

  return (
    <ul className="list-disc pl-6 space-y-2 text-gray-700 my-4">
      {items.map((item, i) => (
        <li key={i} className="leading-relaxed">{item}</li>
      ))}
    </ul>
  );
};

const renderContent = (
  content: string,
  highlights?: string[],
  tableData?: any[],
  tableHeaders?: string[]
) => {
  const paragraphs = content.split("\n");
  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph, index) => {
        if (!paragraph.trim()) return null;
        if (paragraph.startsWith("![")) {
          const imageAlt = paragraph.match(/!\[(.*?)\]/)?.[1] || "";
          const imageSrc = paragraph.match(/\((.*?)\)/)?.[1] || "";
          return renderImage(imageSrc, imageAlt);
        }
        if (paragraph.startsWith("-")) {
          return renderList(paragraph);
        }
        if (paragraph.startsWith("## ")) {
          return (
            <h3
              key={index}
              className="text-xl font-bold text-mpgin-darkBlue mt-6 mb-3"
            >
              {paragraph.slice(3)}
            </h3>
          );
        }
        if (paragraph.startsWith("### ")) {
          return (
            <h4
              key={index}
              className="text-lg font-semibold text-mpgin-darkBlue mt-5 mb-2"
            >
              {paragraph.slice(4)}
            </h4>
          );
        }
        if (paragraph.startsWith("# ")) {
          return (
            <h2
              key={index}
              className="text-2xl font-bold text-mpgin-darkBlue mt-8 mb-4 border-b pb-2 border-gray-300"
            >
              {paragraph.slice(2)}
            </h2>
          );
        }
        return (
          <p key={index} className="text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        );
      })}
      {tableData && tableHeaders && renderTable(tableData, tableHeaders)}
      {tableData && !tableHeaders && (
  <div className="space-y-2">
    {tableData.map((item, index) => (
      <div key={index}>
        <span className="font-medium text-gray-800">{item.name}:</span>{" "}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Click Here
        </a>
      </div>
    ))}
  </div>
)}

      {highlights && highlights.length > 0 && (
        <div className="my-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="text-xl font-bold text-mpgin-darkBlue mb-3">
            Highlights
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-gray-700">{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const renderIqacTable = (data: any[]) => {
  const headers = ["Particulars of the post", "Name of the Member"];
  return (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-gray-50">
          {/* <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300"
              >
                {header}
              </th>
            ))}
          </tr> */}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {Object.values(row).map((cell: any, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 whitespace-normal text-sm text-gray-700 border border-gray-300"
                >
                  {cell.startsWith('https://mpgi.ac.in/') ? (
                    <a href={cell} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      Click Here</a>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ImageGrid = ({ images }: { images: string[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
      {images.slice(0, 4).map((src, idx) => (
        <div key={idx} className="rounded-lg overflow-hidden shadow-md border border-gray-200">
          <img
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

const SchoolOfEngineeringQuickLinks = () => {
  const [activeId, setActiveId] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const renderMainContent = () => {
    switch (activeId) {
      case "principal":
        const principal = profiles.find((p) => p.id === "principal");
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 w-full"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3 p-6 sm:p-8 lg:p-10 order-2 lg:order-1">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
                >
                  {principal?.name}'s Profile
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4 text-gray-700 leading-relaxed"
                >
                  {principal?.content &&
                    renderContent(
                      principal.content,
                      principal.highlights,
                      principal.pdfLinks
                    )}
                </motion.div>
              </div>
              <div className="lg:w-1/3 p-6 sm:p-8 lg:p-10 border-l border-gray-200 flex flex-col items-center bg-gray-50 order-1 lg:order-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-lg overflow-hidden shadow-md mb-6 border-4 border-white ring-2 ring-mpgin-blue"
                >
                  <img
                    src={principal?.image}
                    alt={principal?.name}
                    className="w-full h-auto max-w-xs object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-mpgin-darkBlue">
                    {principal?.name}
                  </h2>
                  <p className="mt-2 text-lg font-semibold text-mpgin-blue">
                    {principal?.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "home":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {homeData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none text-gray-700 whitespace-pre-line"
            >
              {renderContent(homeData.content)}
            </motion.div>
          </motion.div>
        );

      case "placements":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {placementData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none text-gray-700 font-semibold whitespace-pre-line"
            >
              {placementData.content}
            </motion.div>
          </motion.div>
        );
      case "achievements":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {achievementData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none text-gray-700 whitespace-pre-line"
            >
              {renderContent(achievementData.content)}
            </motion.div>
          </motion.div>
        );
      case "nirf":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {nirfData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none font-semibold text-gray-700 whitespace-pre-line"
            >
              {renderContent(nirfData.content)}
            </motion.div>
          </motion.div>
        );
      case "mandatory-disclosure":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {mandatoryDisclosureData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none font-semibold text-gray-700 whitespace-pre-line"
            >
              {renderContent(mandatoryDisclosureData.content)}
            </motion.div>
          </motion.div>
        );
      case "iqac":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {iqacData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none font-semibold text-gray-700 whitespace-pre-line"
            >
              {renderContent(iqacData.content, [], iqacData.tableData)}
            </motion.div>
          </motion.div>
        );

      case "innovationIncubation":
        const images = [lab1, lab2, lab3, lab4];
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {innovationIncubation.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none font-semibold text-gray-700 whitespace-pre-line"
            >
              {renderContent(innovationIncubation.content)}
              {renderInnovationTable(innovationIncubation.tableData)}
            </motion.div>

            {/* Display 2 images in a responsive grid */}
            <ImageGrid images={images} />
          </motion.div>
        );

      case "swayam-nptel":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {swayamNptelData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none font-semibold text-gray-700 whitespace-pre-line"
            >
              {renderContent(swayamNptelData.content)}
              {renderNptelTable(swayamNptelData.tableData)}
            </motion.div>
          </motion.div>
        );
      case "vision-mission":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {visionMissionData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none font-semibold text-gray-700 whitespace-pre-line"
            >
              {renderContent(visionMissionData.content)}
            </motion.div>
          </motion.div>
        );
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {navItems.find((item) => item.id === activeId)?.label}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 text-lg"
            >
              Content for this section is coming soon. Please check back later.
            </motion.p>
          </motion.div>
        );
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="md:hidden flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-mpgin-darkBlue"></h2>
        <button
          ref={menuButtonRef}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-mpgin-darkBlue"
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div className="w-full mx-auto flex flex-col lg:flex-row gap-6">
        <aside
          className={`lg:w-1/4 xl:w-1/5 bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 fixed lg:static z-50 lg:z-auto h-full overflow-y-auto ${isSidebarOpen ? "block inset-0" : "hidden lg:block"
            }`}
          ref={sidebarRef}
        >
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 text-mpgin-darkBlue"
          >
            <X size={24} />
          </button>
          <nav className="space-y-2 mt-6 md:mt-0">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 5 }}
                onClick={() => {
                  setActiveId(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`block w-full border border-gray-200 text-left py-3 px-4 transition-all duration-200 font-bold text-lg md:text-base ${activeId === item.id
                  ? "bg-mpgin-darkBlue text-mpgin-blue underline"
                  : "bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-white text-mpgin-darkBlue"
                  }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </aside>
        <main className="flex-1 lg:w-2/4 xl:w-3/5">{renderMainContent()}</main>
        <aside className="lg:w-1/4 xl:w-1/5">
          <div className="sticky top-44">
            <NotificationComponent />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SchoolOfEngineeringQuickLinks;
