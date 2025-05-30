import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Fees from "./pages/Fees";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import Syllabus from "./pages/Syllabus";
import StudentPortal from "./pages/StudentPortal";
import FeaturesPage from "./pages/FeaturesPage";
import Facilities from "./pages/Facilities";
import TrainingPlacement from "./pages/Trainings";
import Gallery from "./pages/Gallery";
import SchoolOfEngineeringHome from "./pages/schoolOfEngineering/SchoolOfEngineeringHome";
import SchoolOfManagementHome from "./pages/schoolOfManagement/SchoolOfManagementHome";
import VishwabharatiPolytechnicHome from "./pages/vishwabhartiPolytechnic/VishwabharatiPolytechnicHome";
import SchoolOfEngineeringCourses from "./pages/schoolOfEngineering/SchoolOfEngineeringCourses";
import SchoolOfManagementCourses from "./pages/schoolOfManagement/SchoolOfManagementCourses";
import Departments from "./components/Departments";
import ScrollToTop from "./components/ScrollToTop";
import ProfilePage from "./pages/ProfilePage";
import VishwabhartiPolytechnicCourses from "./pages/vishwabhartiPolytechnic/VishwabhartiPolytechnicCourses";
import FileUploadModal from "./components/uploadFiles";
import Header from "./components/Header";
import { Toaster } from "sonner";
import Login from "./components/Login";
import Dashboard from "./pages/admin/Dashboard";
import DepartmentRoutes from "./pages/DepartmentRoutes";
import Faculty from "./pages/Faculty";
import CellsCommittees from "./pages/CellsCommittees";
import Admission from "./pages/Admission";
import ContactPage from "./pages/ContactPage";
import AlumniPage from "./pages/AlumniPage";


export default function App() {
  const location = useLocation();
  return (

    <div className="min-h-screen">
      {location.pathname === "/" || location.pathname === "/login" || location.pathname === "/admin/dashboard" ? <Header /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/uploadfiles" element={<FileUploadModal />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/:collegeId/facilities/:facilityPath" element={<Facilities />} />
        <Route path="/trainings" element={<TrainingPlacement />} />
        <Route path="/:collegeId/campus" element={<Gallery />} />
        <Route path="/:collegeId/faculty" element={<Faculty />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/:collegeId/admission/*" element={<Admission />} />
        <Route path="/student-portal/fees" element={<Fees />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/student-portal/placements" element={<Jobs />} />
        <Route path="/student-portal/syllabus" element={<Syllabus />} />
        <Route path="/student-portal/*" element={<StudentPortal />} />
        <Route path="/:collegeId/contact" element={<ContactPage />} />
        <Route path="/:college/esteemed-alumni" element={<AlumniPage />} />

        <Route
          path="/school-of-engineering/home"
          element={<SchoolOfEngineeringHome />}
        />
        <Route
          path="/school-of-engineering/courses"
          element={<SchoolOfEngineeringCourses />}
        />

        <Route
          path="/school-of-management/home"
          element={<SchoolOfManagementHome />}
        />
        <Route
          path="/school-of-management/courses"
          element={<SchoolOfManagementCourses />}
        />

        <Route
          path="/vishwabharati-polytechnic-institute/home"
          element={<VishwabharatiPolytechnicHome />}
        />
        <Route
          path="/vishwabharati-polytechnic-institute/courses"
          element={<VishwabhartiPolytechnicCourses />}
        />
        <Route path="/:collegeId/cells-committees" element={<CellsCommittees />} />

      </Routes>
      <DepartmentRoutes />
      <Footer />
      <ScrollToTop />

      <Toaster
        position="top-right"
        richColors
        expand={true}
        visibleToasts={3}
        duration={5000}
        closeButton
        theme="light"

      />
    </div>

  );
}
