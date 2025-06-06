import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Pencil,
  Trash2,
  Plus,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import api from "../../data/Api";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import Input from "../../components/ui/Input";

interface Alumni {
  _id: string;
  name: string;
  email: string;
  phone: string;
  yearOfPassing: string;
  college: string;
  department: string;
  company: string;
  designation: string;
  package: string;
  profilePhoto: {
    url: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
}

const AlumniTable = () => {
  const [alumni, setAlumni] = useState<Alumni[]>([]);
  const [filteredAlumni, setFilteredAlumni] = useState<Alumni[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState<Alumni | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    yearOfPassing: "",
    college: "",
    department: "",
    company: "",
    designation: "",
    package: "",
    profilePhoto: null as File | null,
  });
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [filters, setFilters] = useState({
    college: "",
    department: "",
  });

  // Get unique colleges and departments from alumni data
  const colleges = Array.from(new Set(alumni.map((a) => a.college)));
  const departments = Array.from(
    new Set(
      alumni
        .filter((a) => (filters.college ? a.college === filters.college : true))
        .map((a) => a.department)
    )
  );

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch alumni data
  useEffect(() => {
    fetchAlumni();
  }, []);

  // Apply filters when alumni data or filters change
  useEffect(() => {
    let result = [...alumni];

    if (filters.college) {
      result = result.filter((a) => a.college === filters.college);
    }

    if (filters.department) {
      result = result.filter((a) => a.department === filters.department);
    }

    setFilteredAlumni(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [alumni, filters]);

  const fetchAlumni = async () => {
    try {
      const { data } = await api.get(`/alumni/getAll`);
      setAlumni(data.data);
      setFilteredAlumni(data.data);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to fetch alumni");
    }
  };

  // Handle filter changes
  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => {
      const newFilters = {
        ...prev,
        [name]: value,
      };

      // Reset department filter when college changes
      if (name === "college") {
        newFilters.department = "";
      }

      return newFilters;
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      college: "",
      department: "",
    });
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profilePhoto: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  // Open modal for editing
  const handleOpenEdit = (item: Alumni) => {
    setEditItem(item);
    setFormData({
      name: item.name,
      email: item.email,
      phone: item.phone,
      yearOfPassing: item.yearOfPassing,
      college: item.college,
      department: item.department,
      company: item.company,
      designation: item.designation,
      package: item.package,
      profilePhoto: null,
    });
    setPreview(item.profilePhoto?.url || "");
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      yearOfPassing: "",
      college: "",
      department: "",
      company: "",
      designation: "",
      package: "",
      profilePhoto: null,
    });
    setPreview("");
    setErrors({});
  };

  // Validate form data
  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.yearOfPassing.trim())
      newErrors.yearOfPassing = "Year of passing is required";
    if (!formData.college.trim()) newErrors.college = "College is required";
    if (!formData.department.trim())
      newErrors.department = "Department is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.designation.trim())
      newErrors.designation = "Designation is required";
    if (!formData.package.trim()) newErrors.package = "Package is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("yearOfPassing", formData.yearOfPassing);
      form.append("college", formData.college);
      form.append("department", formData.department);
      form.append("company", formData.company);
      form.append("designation", formData.designation);
      form.append("package", formData.package);
      if (formData.profilePhoto)
        form.append("profilePhoto", formData.profilePhoto);

      const endpoint = editItem
        ? `/alumni/edit/${editItem._id}`
        : "/alumni/create";
      const method = editItem ? api.put : api.post;

      await method(endpoint, form);
      await fetchAlumni();
      toast.success(`Alumni ${editItem ? "updated" : "added"} successfully`);
      handleCloseModal();
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          `Error ${editItem ? "updating" : "adding"} alumni`
      );
    } finally {
      setLoading(false);
    }
  };

  // Handle delete action
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this alumni?")) return;

    try {
      await api.delete(`/alumni/delete/${id}`);
      await fetchAlumni();
      toast.success("Alumni deleted successfully");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Error deleting alumni");
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage);
  const paginatedAlumni = filteredAlumni.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mt-8 overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Alumni Management
        </h2>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2"
        >
          <Plus size={18} /> Add Alumni
        </Button>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Filters:</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
          <Input
            type="select"
            label="College"
            value={filters.college}
            onChange={(e) => handleFilterChange("college", e.target.value)}
            options={[
              { value: "", label: "All Colleges" },
              ...colleges.map((college) => ({
                value: college,
                label: college,
              })),
            ]}
          />

          <Input
            type="select"
            label="Department"
            value={filters.department}
            onChange={(e) => handleFilterChange("department", e.target.value)}
            options={[
              { value: "", label: "All Departments" },
              ...departments.map((dept) => ({
                value: dept,
                label: dept,
              })),
            ]}
            disabled={!filters.college && departments.length > 0}
          />

          <div className="flex items-end">
            <Button
              variant="secondary"
              onClick={resetFilters}
              className="w-full md:w-auto"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-500">
        Showing {filteredAlumni.length} of {alumni.length} alumni records
      </div>

      <table className="min-w-full text-sm border-collapse rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="p-3 text-left">Photo</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Year</th>
            <th className="p-3 text-left">College</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Company</th>
            <th className="p-3 text-left">Designation</th>
            <th className="p-3 text-left">Package</th>
            <th className="p-3 text-left">Added On</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedAlumni.map((alum) => (
            <tr
              key={alum._id}
              className="border-b hover:bg-gray-50 transition-all"
            >
              <td className="p-3">
                {alum.profilePhoto?.url ? (
                  <img
                    src={alum.profilePhoto.url}
                    alt={alum.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Photo
                  </div>
                )}
              </td>
              <td className="p-3 font-medium text-gray-800">{alum.name}</td>
              <td className="p-3">{alum.email}</td>
              <td className="p-3">{alum.phone}</td>
              <td className="p-3">{alum.yearOfPassing}</td>
              <td className="p-3 capitalize">{alum.college}</td>
              <td className="p-3 capitalize">{alum.department}</td>
              <td className="p-3">{alum.company}</td>
              <td className="p-3">{alum.designation}</td>
              <td className="p-3">{alum.package}</td>
              <td className="p-3">{formatDate(alum.createdAt)}</td>
              <td className="p-3 space-x-2">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => handleOpenEdit(alum)}
                >
                  <Pencil size={18} />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(alum._id)}
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
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
          disabled={currentPage === totalPages || totalPages === 0}
          icon={<ChevronRight className="w-5 h-5" />}
        >
          Next
        </Button>
      </div>

      {/* Modal for Adding/Editing Alumni */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={`${editItem ? "Edit" : "Add"} Alumni`}
      >
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
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            error={errors.email}
          />
          <Input
            label="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            error={errors.phone}
          />
          <Input
            label="Year of Passing"
            value={formData.yearOfPassing}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                yearOfPassing: e.target.value,
              }))
            }
            error={errors.yearOfPassing}
          />
          <Input
            label="College"
            type="select"
            value={formData.college}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, college: e.target.value }))
            }
            options={colleges.map((college) => ({
              value: college,
              label: college,
            }))}
            error={errors.college}
          />
          <Input
            label="Department"
            value={formData.department}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, department: e.target.value }))
            }
            error={errors.department}
          />
          <Input
            label="Company"
            value={formData.company}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, company: e.target.value }))
            }
            error={errors.company}
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
            label="Package (INR)"
            value={formData.package}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, package: e.target.value }))
            }
            error={errors.package}
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {editItem ? "New Photo (optional)" : "Profile Photo"}
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
              {editItem ? "Update" : "Add"} Alumni
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AlumniTable;
