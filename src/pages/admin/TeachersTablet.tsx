import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Pencil, Trash2, Plus } from 'lucide-react';
import api from '../../data/Api';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import Input from '../../components/ui/Input';
import { CollegeType, collegeConfigs } from '../../data/colleges';

interface Faculty {
  _id: string;
  name: string;
  department: string;
  qualification: string;
  experience: string;
  designation: string; // New field
  dateOfJoining: string; // New field
  photo: string;
  college: string;
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
    name: '',
    department: college?.departments[0]?.slug || '',
    qualification: '',
    experience: '',
    designation: '', // New field
    dateOfJoining: '', // New field
    photo: null as File | null,
  });
  const [preview, setPreview] = useState('');
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  // Fetch faculty data
  useEffect(() => {
    if (!college) {
      toast.error('Invalid college type');
      return;
    }
    fetchFaculty();
  }, [collegeType]);

  const fetchFaculty = async () => {
    try {
      const { data } = await api.get(`/faculty/college/${college.slug}`);
      setFaculty(data);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to fetch faculty');
    }
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  // Open modal for editing
  const handleOpenEdit = (item: Faculty) => {
    setEditItem(item);
    setFormData({
      name: item.name,
      department: item.department,
      qualification: item.qualification,
      experience: item.experience,
      designation: item.designation, // New field
      dateOfJoining: item.dateOfJoining, // New field
      photo: null,
    });
    setPreview(item.photo);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
    setFormData({
      name: '',
      department: college?.departments[0]?.slug || '',
      qualification: '',
      experience: '',
      designation: '', // New field
      dateOfJoining: '', // New field
      photo: null,
    });
    setPreview('');
    setErrors({});
  };

  // Validate form data
  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    if (!formData.qualification.trim()) newErrors.qualification = 'Qualification is required';
    // if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (!formData.designation.trim()) newErrors.designation = 'Designation is required'; // New field

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const form = new FormData();
      form.append('name', formData.name);
      form.append('college', college.slug);
      form.append('department', formData.department);
      form.append('qualification', formData.qualification);
      form.append('experience', formData.experience);
      form.append('designation', formData.designation); // New field
      form.append('dateOfJoining', formData.dateOfJoining); // New field
      if (formData.photo) form.append('photo', formData.photo);

      const endpoint = editItem
        ? `/faculty/${editItem._id}`
        : '/faculty/add';

      const method = editItem ? api.put : api.post;

      await method(endpoint, form);
      await fetchFaculty();
      toast.success(`Faculty ${editItem ? 'updated' : 'added'} successfully`);
      handleCloseModal();
    } catch (error: any) {
      toast.error(error.response?.data?.message || `Error ${editItem ? 'updating' : 'adding'} faculty`);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete action
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this faculty member?')) return;

    try {
      await api.delete(`/faculty/${id}`);
      await fetchFaculty();
      toast.success('Faculty deleted successfully');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Error deleting faculty');
    }
  };

  // Get department display name
  const getDepartmentName = (slug: string) => {
    return college?.departments.find((d) => d.slug === slug)?.displayName || slug;
  };

  // Render the component
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

      <table className="min-w-full text-sm border-collapse rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="p-3 text-left">Photo</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Qualification</th>
            <th className="p-3 text-left">Experience</th>
            <th className="p-3 text-left">Designation</th> {/* New column */}
            <th className="p-3 text-left">Date of Joining</th> {/* New column */}
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((teacher) => (
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
              <td className="p-3">{teacher.designation}</td> {/* New field */}
              <td className="p-3">{new Date(teacher.dateOfJoining).toLocaleDateString()}</td> {/* New field */}
              <td className="p-3 capitalize">{getDepartmentName(teacher.department)}</td>
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
          ))}
        </tbody>
      </table>

      {/* Modal for Adding/Editing Faculty */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={`${editItem ? 'Edit' : 'Add'} Faculty`}>
        <div className="space-y-4">
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
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
            onChange={(e) => setFormData((prev) => ({ ...prev, department: e.target.value }))}
            error={errors.department}
          />
          <Input
            label="Qualification"
            value={formData.qualification}
            onChange={(e) => setFormData((prev) => ({ ...prev, qualification: e.target.value }))}
            error={errors.qualification}
          />
          <Input
            label="Experience"
            value={formData.experience}
            onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
            error={errors.experience}
          />
          <Input
            label="Designation"
            value={formData.designation}
            onChange={(e) => setFormData((prev) => ({ ...prev, designation: e.target.value }))}
            error={errors.designation} // New field
          />
          <Input
            label="Date of Joining"
            type="date"
            value={formData.dateOfJoining}
            onChange={(e) => setFormData((prev) => ({ ...prev, dateOfJoining: e.target.value }))}
            error={errors.dateOfJoining} // New field
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {editItem ? 'New Photo (optional)' : 'Photo'}
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center relative">
              {preview && (
                <img src={preview} alt="Preview" className="max-h-48 mx-auto mb-4 rounded-lg" />
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
                  <p className="text-sm text-gray-400 mt-1">Recommended size 400x400px</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} isLoading={loading}>
              {editItem ? 'Update' : 'Add'} Faculty
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeachersTable;