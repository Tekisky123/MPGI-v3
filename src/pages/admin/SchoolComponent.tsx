import { CollegeType } from "../../data/colleges";
import GalleryTable from "./GalleryTable";
import TeachersTable from "./TeachersTablet";



const SchoolComponent = ({ collegeType }: { collegeType: CollegeType }) => {
  return (
    <div className="space-y-8">
      <GalleryTable collegeType={collegeType} />
      <TeachersTable collegeType={collegeType} />
    </div>
  );
};

export default SchoolComponent;