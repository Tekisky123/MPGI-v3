import { useParams, useNavigate, Routes, Route } from "react-router-dom";
import {
  admissionNavItems,
  collegeAdmissionDataMap,
  UNDERSTANDING_DOCUMENTS,
} from "../data/AdmissionData";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

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
        Fee Structure 2024-25
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

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Path to public file

const InformationBrochureTab = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(false);
  const [width, setWidth] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = Math.min(800, window.innerWidth - 40);
      setWidth(newWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPdfError(false);
    setPageNumber(1);
  }

  function onDocumentLoadError(error: Error) {
    console.error("PDF load error:", error);
    setPdfError(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
    >
      <h2 className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300">
        Information Brochure Academic Year 2024-25
      </h2>

      <div className="flex justify-center mb-4">
        <a
          href=""
          download
          className="inline-block bg-mpg0in-blue hover:bg-mpgin-darkBlue  text-mpginBlue hover:text-mpgin-blue font-medium py-2 px-4 rounded transition-colors mb-4"
        >
          Download Full Brochure
        </a>
      </div>

      {pdfError ? (
        <div className="text-center py-8 text-red-500">
          {/* Failed to load PDF preview. Please download the brochure using the button above. */}
        </div>
      ) : (
        <>
          <div className="border border-gray-200 rounded-lg overflow-hidden flex justify-center">
            <Document
              file=""
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<div className="text-center py-8">Loading PDF preview...</div>}
              error={<div className="text-center py-8 text-red-500">Failed to load PDF preview</div>}
            >
              <Page
                pageNumber={pageNumber}
                width={width}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="border border-gray-200"
              />
            </Document>
          </div>

          {numPages && (
            <div className="mt-4 text-center text-gray-600">
              Page {pageNumber} of {numPages}
            </div>
          )}

          {numPages && numPages > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              <button
                onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                disabled={pageNumber <= 1}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
                disabled={pageNumber >= numPages}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

const AdmissionPage = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close sidebar on outside click
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

  // Close sidebar on ESC key press
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
        {/* Sidebar */}
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

        {/* Main Content */}
        <main className="flex-1 lg:w-2/4 xl:w-3/5">
          <Routes>
            <Route path="courses" element={<UnderGraduateTab />} />
            <Route path="fee-structure" element={<FeeStructureTab />} />
            <Route path="undertaking" element={<UndertakingTab />} />
            <Route path="information-brochure" element={<InformationBrochureTab />} />
          </Routes>
        </main>
      </div>
    </section>
  );
};

export default AdmissionPage;