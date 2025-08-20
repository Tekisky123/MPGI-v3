import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Pencil, Trash2, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import api from "../../data/Api";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import Input from "../../components/ui/Input";
import { CollegeType, collegeConfigs } from "../../data/colleges";
import facultyDataSort from "../../data/facultyDataSort";

interface Faculty {
  _id: string;
  name: string;
  department: string;
  qualification: string;
  experience: string;
  designation: string;
  dateOfJoining: string;
  photo: string;
  college: string;
  sequence: number;
}

interface Props {
  collegeType: CollegeType;
}

const TeachersTable = ({ collegeType }: Props) => {
  const college = collegeConfigs[collegeType];
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState<Faculty | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    department: college?.departments[0]?.slug || "",
    qualification: "",
    experience: "",
    designation: "",
    dateOfJoining: "",
    sequence: 0,
    photo: null as File | null,
  });
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (!college) {
      toast.error("Invalid college type");
      return;
    }
    fetchFaculty();
  }, [collegeType]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedDepartment]);

  const fetchFaculty = async () => {
    try {
      const { data } = await api.get<Faculty[]>(`/faculty/college/${college.slug}`);
      setFaculty(facultyDataSort(data));
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to fetch faculty");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleOpenEdit = (item: Faculty) => {
    setEditItem(item);
    setFormData({
      name: item.name,
      department: item.department,
      qualification: item.qualification,
      experience: item.experience,
      designation: item.designation,
      dateOfJoining: item.dateOfJoining,
      sequence: item.sequence,
      photo: null,
    });
    setPreview(item.photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
    setFormData({
      name: "",
      department: college?.departments[0]?.slug || "",
      qualification: "",
      experience: "",
      designation: "",
      dateOfJoining: "",
      sequence: 0,
      photo: null,
    });
    setPreview("");
    setErrors({});
  };

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.department.trim()) newErrors.department = "Department is required";
    if (!formData.qualification.trim()) newErrors.qualification = "Qualification is required";
    if (!formData.designation.trim()) newErrors.designation = "Designation is required";
    if (!formData.sequence || formData.sequence <= 0) newErrors.sequence = "Sequence is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      setLoading(true);
      const form = new FormData();
      form.append("name", formData.name);
      form.append("college", college.slug);
      form.append("department", formData.department);
      form.append("qualification", formData.qualification);
      form.append("experience", formData.experience);
      form.append("designation", formData.designation);
      form.append("dateOfJoining", formData.dateOfJoining);
      form.append("sequence", formData.sequence.toString());
      if (formData.photo) form.append("photo", formData.photo);
      const endpoint = editItem ? `/faculty/${editItem._id}` : "/faculty/add";
      const method = editItem ? api.put : api.post;
      await method(endpoint, form);
      await fetchFaculty();
      toast.success(`Faculty ${editItem ? "updated" : "added"} successfully`);
      handleCloseModal();
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
        `Error ${editItem ? "updating" : "adding"} faculty`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this faculty member?")) return;
    try {
      await api.delete(`/faculty/${id}`);
      await fetchFaculty();
      toast.success("Faculty deleted successfully");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Error deleting faculty");
    }
  };

  const getDepartmentName = (slug: string) => {
    return college?.departments.find((d) => d.slug === slug)?.displayName || slug;
  };

  // Filter faculty by selected department
  const filteredFaculty = selectedDepartment
    ? faculty.filter((teacher) => teacher.department === selectedDepartment)
    : faculty;

  // Calculate pagination for filtered faculty
  const totalPages = Math.ceil(filteredFaculty.length / itemsPerPage);
  const paginatedFaculty = filteredFaculty.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (!college) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-semibold">
        Invalid college type
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mt-8 overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Faculty - {college.displayName}
        </h2>
        <Button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2">
          <Plus size={18} /> Add Faculty
        </Button>
      </div>

      {/* Department Filter Dropdown */}
      {college.departments && college.departments.length > 0 && (
        <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg shadow-sm border border-blue-200">
          <label
            htmlFor="department-filter"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            🔍 Filter by Department
          </label>
          <div className="relative">
            <select
              id="department-filter"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full pl-4 pr-10 py-3 text-base border-2 border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 appearance-none bg-white text-gray-700 hover:border-blue-400"
            >
              <option value="" className="text-gray-500 bg-blue-50">
                -- All Departments --
              </option>
              {college.departments.map((dept) => (
                <option
                  key={dept.slug}
                  value={dept.slug}
                  className="text-gray-700 hover:bg-blue-50"
                >
                  {dept.displayName}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-blue-600">
              <svg
                className="fill-current h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      )}


      {/* Faculty Table */}
      <table className="min-w-full text-sm border-collapse rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="p-3 text-left">Photo</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Qualification</th>
            <th className="p-3 text-left">Experience</th>
            <th className="p-3 text-left">Designation</th>
            <th className="p-3 text-left">Date of Joining</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Sequence</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedFaculty.length > 0 ? (
            paginatedFaculty.map((teacher) => (
              <tr key={teacher._id} className="border-b hover:bg-gray-50 transition-all">
                <td className="p-3">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="p-3 font-medium text-gray-800">{teacher.name}</td>
                <td className="p-3">{teacher.qualification}</td>
                <td className="p-3">{teacher.experience}</td>
                <td className="p-3">{teacher.designation}</td>
                <td className="p-3">
                  {new Date(teacher.dateOfJoining).toLocaleDateString()}
                </td>
                <td className="p-3 capitalize">
                  {getDepartmentName(teacher.department)}
                </td>
                <td className="p-3">{teacher.sequence}</td>
                <td className="p-3 space-x-2">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => handleOpenEdit(teacher)}
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(teacher._id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="p-3 text-center text-gray-500">
                No faculty members found for the selected department.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 gap-4">
          <Button
            variant="secondary"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            icon={<ChevronLeft className="w-5 h-5" />}
          >
            Previous
          </Button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="secondary"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            icon={<ChevronRight className="w-5 h-5" />}
          >
            Next
          </Button>
        </div>
      )}

      {/* Modal for Adding/Editing Faculty */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={`${editItem ? "Edit" : "Add"} Faculty`}
      >
        {/* Modal content remains the same */}
        <div className="space-y-4">
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            error={errors.name}
          />
          <Input
            label="Department"
            type="select"
            value={formData.department}
            options={college.departments.map((d) => ({
              value: d.slug,
              label: d.displayName,
            }))}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, department: e.target.value }))
            }
            error={errors.department}
          />
          <Input
            label="Qualification"
            value={formData.qualification}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                qualification: e.target.value,
              }))
            }
            error={errors.qualification}
          />
          <Input
            label="Experience"
            value={formData.experience}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, experience: e.target.value }))
            }
            error={errors.experience}
          />
          <Input
            label="Designation"
            value={formData.designation}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, designation: e.target.value }))
            }
            error={errors.designation}
          />
          <Input
            label="Date of Joining"
            type="date"
            value={formData.dateOfJoining}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                dateOfJoining: e.target.value,
              }))
            }
            error={errors.dateOfJoining}
          />
          <Input
            label="Sequence (for ordering)"
            type="number"
            value={formData.sequence}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, sequence: Number(e.target.value) }))
            }
            error={errors.sequence}
          />
          <p className="text-xs text-gray-500 mt-1">
            <strong>Note:</strong> This sequence number determines the order in which faculty members appear on the website.
            <strong> Lower numbers appear first.</strong>
            <br />
            For example:
            <ul className="list-disc pl-4 mt-1">
              <li><strong>1</strong> will appear before <strong>2</strong></li>
              <li><strong>0</strong> will appear <strong>after all positive numbers</strong> (e.g., after 1, 2, 3, etc.)</li>
            </ul>
            To ensure a faculty member appears at the top, use a low positive number like <strong>1</strong>.
          </p>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {editItem ? "New Photo (optional)" : "Photo"}
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center relative">
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="max-h-48 mx-auto mb-4 rounded-lg"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {!preview && (
                <div className="py-8">
                  <p className="text-gray-500">Click to upload photo</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Recommended size 400x400px
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} isLoading={loading}>
              {editItem ? "Update" : "Add"} Faculty
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeachersTable;
