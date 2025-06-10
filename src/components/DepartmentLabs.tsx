import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { colleges } from "../data/collegesData";
import { AlertCircle } from "lucide-react";

const DepartmentLabs = () => {
  const { collegeId, departmentId } = useParams();
  const [selectedLab, setSelectedLab] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const college = colleges.find((c) => c.id === collegeId);
  const department = college?.departments.find((d) => d.id === departmentId);

  const openPopup = (lab) => {
    setSelectedLab(lab);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedLab(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closePopup();
    }
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  if (!department || !department.labs || department.labs.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-red-600 bg-red-50 p-4 rounded-xl flex items-center gap-3">
          <AlertCircle className="w-6 h-6 flex-shrink-0" />
          <div>No Labs Data Found</div>
        </div>
      </div>
    );
  }

  const hasEquipmentDetails = department.labs.some(lab => lab.majorEquipmentDetails && lab.majorEquipmentDetails.length > 0);
  const hasAreaData = department.labs.some(lab => lab.area);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Laboratories</h2>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full shadow overflow-hidden">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left border-b">Sr. No.</th>
                <th className="py-3 px-4 text-left border-b">Laboratory Name</th>
                {hasAreaData && <th className="py-3 px-4 text-left border-b">Area</th>}
                <th className="py-3 px-4 text-left border-b">Laboratory Incharge</th>
                {hasEquipmentDetails && <th className="py-3 px-4 text-left border-b">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {department.labs.map((lab) => (
                <tr key={lab.srNo} className="hover:bg-gray-50 transition">
                  <td className="py-3 px-4 border-b">{lab.srNo}</td>
                  <td className="py-3 px-4 border-b font-medium">{lab.labName}</td>
                  {hasAreaData && <td className="py-3 px-4 border-b">{lab.area}</td>}
                  <td className="py-3 px-4 border-b">{lab.incharge}</td>
                  {hasEquipmentDetails && (
                    <td className="py-3 px-4 border-b">
                      {lab.majorEquipmentDetails && lab.majorEquipmentDetails.length > 0 && (
                        <button
                          onClick={() => openPopup(lab)}
                          className="bg-mpgin-blue text-mpgin-darkBlue font-bold p-1 text-sm w-full sm:w-auto"
                          aria-label={`View details of ${lab.labName}`}
                        >
                          View Details
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isPopupOpen && selectedLab && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div
            ref={popupRef}
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md max-h-[80vh] overflow-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <h3 id="popup-title" className="text-xl font-bold mb-4">
              {selectedLab.labName}
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Equipment Name</th>
                    <th className="py-2 px-4 border-b text-left">Quantity</th>
                    <th className="py-2 px-4 border-b text-left">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedLab.majorEquipmentDetails.map((equipment, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{equipment.name}</td>
                      <td className="py-2 px-4 border-b">{equipment.quantity}</td>
                      <td className="py-2 px-4 border-b">{equipment.totalCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={closePopup}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
              aria-label="Close popup"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentLabs;
