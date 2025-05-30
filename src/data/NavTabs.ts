export const NAV_ITEMS = [
  { name: "Home", path: "/" },

  // {
  //   name: "Courses",
  //   path: "/courses",
  // },
  {
    name: "Departments",
    subItems: [
      {
        name: "Applied Science & Humanities",
        path: "/applied-science-humanities/profile",
      },
      { name: "Civil Engineering", path: "/civil-engineering/profile" },
      {
        name: "Computer Science & Engineering",
        path: "/computer-science-engineering/profile",
      },
      {
        name: "Electronics & Telecommunication",
        path: "/electronincs-telecommunication-engineering/profile",
      },
      {
        name: "Information Technology",
        path: "/information-technology/profile",
      },
      {
        name: "Mechanical Engineering",
        path: "/mechanical-engineering/profile",
      },
      {
        name: "Human Values & Ethics",
        path: "/courses-humanvalues-professionalethics/profile",
      },
      { name: "Training and Placement", path: "/trainingandplacement/profile" },
      {
        name: "Innovation & Entrepreneurship",
        path: "/Innovation-Entrepreneurship-Development-Cell/profile",
      },
      { name: "Research", path: "/research/profile" },
      { name: "Academic Calendar", path: "/academic-calendar" },
    ],
  },
  {
    name: "Cells & Committees",
    subItems: [
      {
        name: "Anti Ragging Committee",
        path: "/cells-committees?section=anti-ragging-committee",
      },
      {
        name: "Anti Sexual Harassment Cell",
        path: "/cells-committees?section=anti-sexual-harassment-cell",
      },
      {
        name: "Women's Guidance Cell",
        path: "/cells-committees?section=womens-guidance-cell",
      },
      {
        name: "SC/ST Cell",
        path: "/cells-committees?section=sc-st-cell",
      },
    ],
  },
  {
    name: "Admission",
    subItems: [
      { name: "Courses", path: "/admission/courses" },
      { name: "Fee Structure", path: "/admission/fee-structure" },
      { name: "Student Information", path: "/admission/student-information" },
      { name: "Undertaking", path: "/admission/undertaking" },
      {
        name: "Information Brochure 2024-25",
        path: "/admission/InformationBrochureAcademicYear2020-21",
      },
      {
        name: "SBI Collect",
        path: "https://www.onlinesbi.sbi/sbicollect/",
        external: true,
      },
      {
        name: "VidyaLaxmi Portal",
        path: "https://www.vidyalakshmi.co.in/",
        external: true,
      },
    ],
  },
  {
    name: "Facilities",
    subItems: [
      { name: "Classrooms", path: "/facilities/classrooms" },
      {
        name: "Girls and Boys Hostel",
        path: "/facilities/girls-boys-hostel",
      },
      { name: "Infrastructure", path: "/facilities/infrastructure" },
      { name: "Library", path: "/facilities/library" },
      { name: "Virtual Labs", path: "/facilities/virtual-labs" },
      { name: "Sports", path: "/facilities/sports" },
      { name: "Remote Center", path: "/facilities/remote-center" },
      // { "name": "Ekeeda", "path": "https://ekeeda.com/", "external": true },
      { name: "Bus Facilities", path: "/facilities/bus-facilities" },
      { name: "WiFi Enable Campus", path: "/facilities/wifi" },
    ],
  },

  {
    name: "Alumni",
    subItems: [
      // { name: "Alumni Registration", path: "/alumni/registration" },
      // { name: "Alumni Speaks", path: "/alumni/speaks" },
      { name: "Esteemed Alumni", path: "/esteemed-alumni" },
    ],
  },

  {
    name: "Student Activities",
    subItems: [
      { name: "CESA", path: "/cesa" },
      { name: "CUC", path: "/cuc" },
      { name: "ETA", path: "/eta" },
      { name: "CSI/IEI", path: "/csi" },
      { name: "MESA", path: "/mesa" },
      { name: "ITSA", path: "/itsa" },
      { name: "CAST Activity", path: "/cast-activity" },
      { name: "Open Source", path: "/open-source" },
      { name: "English Language Club", path: "/english-language-club" },
      { name: "Indoor Sports Achievements", path: "/indoor" },
      { name: "Outdoor Sports Achievements", path: "/outdoor" },
      { name: "Aarohan", path: "/aarohan" },
      { name: "Jhankaar", path: "/jhankaar" },
    ],
  },
  { name: "Campus", path: "/campus" },
  {
    name: "Quick Links",
    subItems: [
      {
        name: "SRTM University",
        path: "https://srtmun.ac.in/en/",
        external: true,
      },
      {
        name: "DBATU University",
        path: "https://dbatu.ac.in/",
        external: true,
      },
      { name: "NPTEL", path: "https://nptel.ac.in/", external: true },
      {
        name: "IEEE",
        path: "https://ieeexplore.ieee.org/Xplore/home.jsp",
        external: true,
      },
      { name: "MSBTE", path: "https://msbte.ac.in/", external: true },
      { name: "DTE", path: "https://dte.maharashtra.gov.in/", external: true },
    ],
  },
  {
    name: "Download",
    subItems: [
      { name: "Current Advertisement", path: "/current-advertisement" },
      { name: "NIRF", path: "/nirf" },
      { name: "Fees Regulatory Authority", path: "/fees" },
    ],
  },
  { name: "Contact", path: "/contact" },
];
