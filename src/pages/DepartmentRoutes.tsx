// src/routes/DepartmentRoutes.tsx
import { Routes, Route } from "react-router-dom";
import CollegeDepartments from "../pages/CollegeDepartments";
import DepartmentPage from "../pages/DepartmentPage";
import DepartmentOverview from "../components/DepartmentOverview";
import DepartmentFaculty from "../components/DepartmentFaculty";
import DepartmentGallery from "../components/DepartmentGallery";
import DepartmentLabs from "../components/DepartmentLabs";
import HodProfilePage from "../components/HodProfilePage";


const DepartmentRoutes = () => (
  <Routes>
    <Route path="/:collegeId/departments" element={<CollegeDepartments />} />
    <Route path="/:collegeId/departments/:departmentId" element={<DepartmentPage />}>
      <Route index element={<HodProfilePage />} />
      <Route path="profile" element={<HodProfilePage />} />
      <Route path="overview" element={<DepartmentOverview />} />
      <Route path="faculty" element={<DepartmentFaculty />} />
      <Route path="gallery" element={<DepartmentGallery />} />
      <Route path="labs" element={<DepartmentLabs />} />
    </Route>
  </Routes>
);

export default DepartmentRoutes;