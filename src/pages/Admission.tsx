import { JSX, useEffect, useRef, useState } from "react";
import undertakingStudent from "../assets/pdf/UNDERTAKING FOR STUDENT.pdf";
import undertakingParents from "../assets/pdf/UNDERTAKING FOR PARENTS.pdf";
import antiRaggingAffidavit from "../assets/pdf/affidavit format anti ragging.pdf";
import { useParams, useNavigate, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import laxmikantDigambarraoKulkarni from "../assets/adminStaff/Mr. Laxmikant Digambarrao Kulkarni.png";
import aniketRameshPatil from "../assets/adminStaff/Mr Aniket Ramesh Patil.png";
import manishkumarMadhukarraoVaidya from "../assets/adminStaff/Mr Manishkumar Madhukarrao Vaidya.png";
import amitAhemadShaikh from "../assets/adminStaff/Mr Amit Ahemad Shaikh.png";
import dayanandVitthalKairamkonda from "../assets/adminStaff/Mr Dayanand Vitthal Kairamkonda.png";
import polyFeesImg from "../assets/poly/polyFeesImg.jpg";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Menu, X } from "lucide-react";
import polyBrouchure1 from "../assets/pdf/polyBroucher1.pdf";
import polyBrouchure2 from "../assets/pdf/polyBroucher2.pdf";
import polyBrouchure3 from "../assets/pdf/polyBroucher3.pdf";

// Tab Navigation Items
export const admissionNavItems = [
  { name: "Courses", path: "/courses" },
  { name: "Fee Structure", path: "/fee-structure" },
  { name: "Administration", path: "/administration" },
  { name: "Undertaking", path: "/undertaking" },
  { name: "Information Brochure 2025-26", path: "/information-brochure" },
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
];

export const UNDERSTANDING_DOCUMENTS = [
  {
    title: "UNDERTAKING FOR STUDENT",
    filePath: undertakingStudent,
  },
  {
    title: "UNDERTAKING FOR PARENTS",
    filePath: undertakingParents,
  },
  {
    title: "AFFIDAVIT BY THE STUDENT ON ANTI-RAGGING",
    filePath: antiRaggingAffidavit,
  },
];

// Information Brochure PDFs with headings
export const INFORMATION_BROCHURE_PDFS = {
  "school-of-engineering": [
    { heading: "Engineering Brochure 1", filePath: "path_to_engineering_brochure_1.pdf" },
    { heading: "Engineering Brochure 2", filePath: "path_to_engineering_brochure_2.pdf" },
    { heading: "Engineering Brochure 3", filePath: "path_to_engineering_brochure_3.pdf" },
  ],
  "school-of-management": [
    { heading: "Management Brochure 1", filePath: "path_to_management_brochure_1.pdf" },
    { heading: "Management Brochure 2", filePath: "path_to_management_brochure_2.pdf" },
  ],
  "vishwabharati-polytechnic-institute": [
    { heading: "Polytechnic Brochure 1", filePath: polyBrouchure1 },
    { heading: "Polytechnic Brochure 2", filePath: polyBrouchure2 },
    { heading: "Polytechnic Brochure 3", filePath: polyBrouchure3 },
  ],
};

// Course Tables
const POLYTECHNIC_COURSES_TABLE = (
  <table className="min-w-full border-collapse text-sm">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2">Sr. No.</th>
        <th className="border px-4 py-2">Course Offered</th>
        <th className="border px-4 py-2">Intake</th>
        <th className="border px-4 py-2">DTE Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Diploma In Computer Engineering</td>
        <td className="border px-4 py-2">90</td>
        <td className="border px-4 py-2">219424510</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">2</td>
        <td className="border px-4 py-2">Diploma In Information Technology</td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2">219424610</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">3</td>
        <td className="border px-4 py-2">Diploma In Electrical Engineering</td>
        <td className="border px-4 py-2">90</td>
        <td className="border px-4 py-2">219429310</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">4</td>
        <td className="border px-4 py-2">Diploma In E & TC Engineering</td>
        <td className="border px-4 py-2">30</td>
        <td className="border px-4 py-2">219437210</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">5</td>
        <td className="border px-4 py-2">Diploma In Civil Engineering</td>
        <td className="border px-4 py-2">30</td>
        <td className="border px-4 py-2">219419110</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">6</td>
        <td className="border px-4 py-2">Diploma In Mechanical Engineering</td>
        <td className="border px-4 py-2">30</td>
        <td className="border px-4 py-2">219461210</td>
      </tr>
    </tbody>
  </table>
);

const SCHOOL_OF_ENGINEERING_BTECH_TABLE = (
  <table className="min-w-full border-collapse text-sm">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2">Sr. No.</th>
        <th className="border px-4 py-2">Course Offered</th>
        <th className="border px-4 py-2">Intake</th>
        <th className="border px-4 py-2">DTE Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Civil Engineering</td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2">211619110</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">2</td>
        <td className="border px-4 py-2">Computer Science & Eng.</td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2">211624210</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">3</td>
        <td className="border px-4 py-2">Electrical Engineering</td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2">211629310</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">4</td>
        <td className="border px-4 py-2">Mechanical Engineering</td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2">211661210</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">5</td>
        <td className="border px-4 py-2">
          Electronics and Telecommunication Engineering
        </td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2">211629510</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">5</td>
        <td className="border px-4 py-2">
          Artificial Intelligence and Data Science
        </td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2"></td>
      </tr>
      <tr>
        <td className="border px-4 py-2">5</td>
        <td className="border px-4 py-2">
          Artificial Intelligence and Machine Learning
        </td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2"></td>
      </tr>
    </tbody>
  </table>
);

const SCHOOL_OF_MANAGEMENT_TABLE = (
  <table className="min-w-full border-collapse text-sm">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2">Sr. No.</th>
        <th className="border px-4 py-2">Program</th>
        <th className="border px-4 py-2">Intake</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Marketing Management</td>
        <td className="border px-4 py-2">120</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">2</td>
        <td className="border px-4 py-2">Financial Management</td>
        <td className="border px-4 py-2">120</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">3</td>
        <td className="border px-4 py-2">Human Resource Management</td>
        <td className="border px-4 py-2">120</td>
      </tr>
    </tbody>
  </table>
);

// Fee Structures
const SCHOOL_OF_ENGINEERING_FEES = (
  <div className="space-y-8">
    {/* Fee structure content */}
  </div>
);

const POLYTECHNIC_FEES = (
  <div className="space-y-8">
    <div className="">
      <div className="mt-4">
        <img
          src={polyFeesImg}
          alt="Fee Structure"
          className="w-full h-auto"
        />
      </div>
    </div>
  </div>
);

const MANAGEMENT_FEES = (
  <div className="space-y-8">
    {/* Fee structure content */}
  </div>
);

// Eligibility & Documents
export const UG_ELIGIBILITY =
  "As per the norms of Govt. of Maharashtra (CET Cell) and Directorate of Technical Education, Maharashtra State.";

export interface CollegeAdmissionData {
  id: string;
  btechIntakeTable: JSX.Element;
  eligibility: string;
  documents: JSX.Element;
  enquiryFormLink: string;
  feeStructure: JSX.Element;
}

export const schoolOfEngineeringAdmission: CollegeAdmissionData = {
  id: "school-of-engineering",
  btechIntakeTable: SCHOOL_OF_ENGINEERING_BTECH_TABLE,
  eligibility: UG_ELIGIBILITY,
  documents: (
    <ul className="list-disc pl-5 space-y-1 text-gray-700">
      <li>Receipt cum Acknowledgement score card</li>
      <li>SSC Marksheet</li>
      <li>HSC Marksheet / Diploma Final Year Marksheet</li>
      <li>Leaving Certificate (TC)</li>
      <li>Caste Certificate (for category students)</li>
      <li>Caste validity Certificate (for category students)</li>
      <li>Non Creamy Layer Certificate (as required)</li>
      <li>Gap Certificate (if any)</li>
      <li>Migration Certificate (if any)</li>
      <li>Certificate of Physically Handicapped (if any)</li>
      <li>Certificate of Domicile & Nationality</li>
      <li>Equivalence Certificate for OMS Students</li>
    </ul>
  ),
  enquiryFormLink: "https://forms.gle/W4JzkHc3y9gZzZwb8",
  feeStructure: SCHOOL_OF_ENGINEERING_FEES,
};

export const vishwabharatiPolytechnicAdmission: CollegeAdmissionData = {
  id: "vishwabharati-polytechnic-institute",
  btechIntakeTable: POLYTECHNIC_COURSES_TABLE,
  eligibility: "Pass in SSC (10th standard).",
  documents: (
    <ul className="list-disc pl-5 space-y-1 text-gray-700">
      <li>SSC Marksheet</li>
      <li>Leaving Certificate</li>
      <li>Caste Certificate (if applicable)</li>
      <li>Domicile Certificate</li>
    </ul>
  ),
  enquiryFormLink: "https://forms.gle/SewAYbZpQB6c4Fdd6",
  feeStructure: POLYTECHNIC_FEES,
};

export const schoolOfManagementAdmission: CollegeAdmissionData = {
  id: "school-of-management",
  btechIntakeTable: SCHOOL_OF_MANAGEMENT_TABLE,
  eligibility: `The basic criteria for MBA Admission Eligibility are that the candidates need to complete their Bachelor's Degree in any stream with at least 50% in aggregate (45% for reserve category) from any UGC/ AIU (Association of Indian Universities) recognized University. MAH-MBA/ MMS/ CAT Examination Score card. Other Entrance Exams score card Like MAT, ATMA as per Gov. Notifications.`,
  documents: (
    <ul className="list-disc pl-5 space-y-1 text-gray-700">
      <li>SSC & HSC Marksheets</li>
      <li>Graduation Marksheet (for PG programs)</li>
      <li>Transfer Certificate</li>
      <li>Gap Certificate (if applicable)</li>
      <li>Caste Certificate (if applicable)</li>
      <li>Domicile Certificate</li>
    </ul>
  ),
  enquiryFormLink: "https://forms.gle/FKdKBgZ2D3pe2VRP9",
  feeStructure: MANAGEMENT_FEES,
};

export const collegeAdmissionDataMap: Record<string, CollegeAdmissionData> = {
  "school-of-engineering": schoolOfEngineeringAdmission,
  "school-of-management": schoolOfManagementAdmission,
  "vishwabharati-polytechnic-institute": vishwabharatiPolytechnicAdmission,
};

const polytechnicAdministrationData = [
  {
    name: "Mr. Laxmikant Digambarrao Kulkarni",
    designation: "Office Superintendent",
    qualification: "MBA (HR)",
    dateOfJoining: "24th August 2009",
    experience: "18 Years",
    contactNo: "9881321000",
    section: "General Administration",
    imageUrl: laxmikantDigambarraoKulkarni,
  },
  {
    name: "Mr. Aniket Ramesh Patil",
    designation: "Clerk",
    qualification: "B.Sc. (CS)",
    dateOfJoining: "13th August 2012",
    experience: "13 Years",
    contactNo: "9405807178",
    section: "MSBTE & DTE Work",
    imageUrl: aniketRameshPatil,
  },
  {
    name: "Mr. Manishkumar Madhukarrao Vaidya",
    designation: "Clerk",
    qualification: "BA",
    dateOfJoining: "18th June 2014",
    experience: "11 Years",
    contactNo: "7058007911",
    section: "Scholarship & Student Section",
    imageUrl: manishkumarMadhukarraoVaidya,
  },
  {
    name: "Mr. Amit Ahemad Shaikh",
    designation: "Clerk",
    qualification: "MA",
    dateOfJoining: "12th April 2012",
    experience: "13 Years",
    contactNo: "7057635806",
    section: "Documentation",
    imageUrl: amitAhemadShaikh,
  },
  {
    name: "Mr. Dayanand Vitthal Kairamkonda",
    designation: "Accountant",
    qualification: "MBA (Finance)",
    dateOfJoining: "01st October 2023",
    experience: "02 Years",
    contactNo: "9325516612",
    section: "Account",
    imageUrl: dayanandVitthalKairamkonda,
  },
];

export const AdministrationTab = () => {
  const { collegeId } = useParams<{ collegeId: string }>();

  if (collegeId !== "vishwabharati-polytechnic-institute") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
      >
        <h2 className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300">
          Administration
        </h2>
        <p>Administration data is not available for this college.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
    >
      <h2 className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300">
        Administration
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {polytechnicAdministrationData.map((person, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={person.imageUrl}
                alt={person.name}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-mpgin-darkBlue mb-1">{person.name}</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Designation:</strong> {person.designation}
              </p>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Qualification:</strong> {person.qualification}
              </p>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Date of Joining:</strong> {person.dateOfJoining}
              </p>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Experience:</strong> {person.experience}
              </p>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Contact No.:</strong> {person.contactNo}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Section:</strong> {person.section}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const UnderGraduateTab = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const currentCollegeData =
    collegeAdmissionDataMap[collegeId || ""] ||
    collegeAdmissionDataMap["school-of-engineering"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
    >
      <h2 className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300">
        Courses Offered
      </h2>
      <div className="overflow-x-auto mb-6">
        {currentCollegeData.btechIntakeTable}
      </div>

      <h3 className="text-xl font-bold text-mpgin-darkBlue mt-6 mb-2">
        Eligibility Criteria
      </h3>
      <div>{currentCollegeData.eligibility}</div>

      <h3 className="text-xl font-bold text-mpgin-darkBlue mt-6 mb-2">
        Documents Required
      </h3>
      <div>{currentCollegeData.documents}</div>

      <div className="mt-8 pt-4 border-t border-gray-200">
        <a
          href={currentCollegeData.enquiryFormLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-medium text-blue-600 hover:text-blue-800 underline text-lg"
        >
          Click here for F.Y. Admission Enquiry
        </a>
      </div>
    </motion.div>
  );
};

const FeeStructureTab = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const currentCollegeData =
    collegeAdmissionDataMap[collegeId || ""] ||
    collegeAdmissionDataMap["school-of-engineering"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
    >
      <h2 className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300">
        Fee Structure 2025-26
      </h2>
      <div className="space-y-6">
        {currentCollegeData.feeStructure}
      </div>
    </motion.div>
  );
};

const UndertakingTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
    >
      <h2 className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300">
        Undertaking Documents
      </h2>
      <div className="space-y-4">
        {UNDERSTANDING_DOCUMENTS.map((doc, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-mpgin-darkBlue mb-2">{doc.title}</h3>
            <a
              href={doc.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-mpgin-blue text-black font-medium py-2 px-4 rounded transition-colors"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const InformationBrochureTab = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const [selectedPdfIndex, setSelectedPdfIndex] = useState(0);

  const brochures = INFORMATION_BROCHURE_PDFS[collegeId || "vishwabharati-polytechnic-institute"];
  const selectedPdf = brochures?.[selectedPdfIndex];

  if (!selectedPdf) {
    return <div className="text-center p-8 text-red-500">No brochure found for selected college.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-xl border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
    >
      <h2 className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300">
        Information Brochures Academic Year 2025-26
      </h2>

      <div className="flex flex-wrap justify-center mb-4 gap-2">
        {brochures.map((brochure, index) => (
          <button
            key={index}
            onClick={() => setSelectedPdfIndex(index)}
            className={`font-medium py-2 px-4 rounded transition-colors ${
              selectedPdfIndex === index
                ? "bg-mpgin-darkBlue text-white"
                : "bg-mpgin-blue text-mpgin-darkBlue"
            }`}
          >
            {brochure.heading}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-4">
        <a
          href={selectedPdf.filePath}
          download
          className="bg-mpgin-blue hover:bg-mpgin-darkBlue text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Download {selectedPdf.heading}
        </a>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden flex justify-center min-h-[500px] bg-gray-50">
        <iframe
          src={selectedPdf.filePath}
          className="w-full h-auto"
          title={selectedPdf.heading}
          style={{ border: 'none' }}
          contextMenu="none"
         
          allowFullScreen
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://docs.google.com/gview?url=" + selectedPdf.filePath + "&embedded=true";
          }
        }>
          <p>Your browser does not support iframes. You can <a href={selectedPdf.filePath}>download the PDF</a> instead.</p>
        </iframe>
      </div>
    </motion.div>
  );
};


const AdmissionPage = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const navigate = useNavigate();
  const activePath = window.location.pathname.split("/").pop() || "";

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="md:hidden flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-mpgin-darkBlue">Navigation</h2>
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
          className={`lg:w-1/4 xl:w-1/5 bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 fixed lg:static z-20 h-full overflow-y-auto ${isSidebarOpen ? "block inset-0" : "hidden lg:block"
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
            {admissionNavItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  className={`block w-full border border-gray-200 text-left py-3 px-4 transition-all duration-200 font-bold text-lg md:text-base ${item.path.includes(activePath)
                    ? "bg-mpgin-darkBlue text-mpgin-blue underline"
                    : "bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-white text-mpgin-darkBlue"
                    }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 5 }}
                  onClick={() => navigate(`/${collegeId}/admission${item.path}`)}
                  className={`block w-full border border-gray-200 text-left py-3 px-4 transition-all duration-200 font-bold text-lg md:text-base ${activePath === item.path.split("/").pop()
                    ? "bg-mpgin-darkBlue text-mpgin-blue underline"
                    : "bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-white text-mpgin-darkBlue"
                    }`}
                >
                  {item.name}
                </motion.button>
              )
            )}
          </nav>
        </aside>

        <main className="flex-1 lg:w-2/4 xl:w-3/5">
          <Routes>
            <Route path="courses" element={<UnderGraduateTab />} />
            <Route path="fee-structure" element={<FeeStructureTab />} />
            <Route path="undertaking" element={<UndertakingTab />} />
            <Route path="information-brochure" element={<InformationBrochureTab />} />
            <Route path="administration" element={<AdministrationTab />} />
          </Routes>
        </main>
      </div>
    </section>
  );
};

export default AdmissionPage;
