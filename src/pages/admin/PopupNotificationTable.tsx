import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Trash2, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import api from "../../data/Api";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

interface Notification {
  _id: string;
  imageUrl: string;
}

const PopupNotificationTable = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState<Notification | null>(null);
  const [formData, setFormData] = useState({
    image: null as File | null,
  });
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState<{ image?: string }>({});

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch notification data
  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const { data } = await api.get("/popupNotification/getPopupNotification");
      setNotifications(data);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to fetch notifications");
    }
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.match('image.*')) {
        setErrors({ image: "Only image files are allowed" });
        return;
      }
      setErrors({});
      setFormData({ image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  // Open modal for editing
  const handleOpenEdit = (item: Notification) => {
    setEditItem(item);
    setPreview(item.imageUrl);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
    setFormData({ image: null });
    setPreview("");
    setErrors({});
  };

  // Validate form data
  const validateForm = () => {
    const newErrors: { image?: string } = {};
    if (!formData.image) newErrors.image = "Image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const form = new FormData();
      if (formData.image) {
        form.append("image", formData.image);
      }

      const endpoint = editItem
        ? `/popupNotification/delete/${editItem._id}`
        : "/popupNotification/create";

      const method = editItem ? api.put : api.post;

      const response = await method(endpoint, form);
      await fetchNotifications();
      toast.success(
        `Notification ${editItem ? "updated" : "added"} successfully`
      );
      handleCloseModal();
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          `Error ${editItem ? "updating" : "adding"} notification`
      );
    } finally {
      setLoading(false);
    }
  };

  // Handle delete action
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this notification?")) return;

    try {
      await api.delete(`/popupNotification/delete/${id}`);
      await fetchNotifications();
      toast.success("Notification deleted successfully");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Error deleting notification"
      );
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(notifications.length / itemsPerPage);
  const paginatedNotifications = notifications.slice(
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
          Notifications
        </h2>
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setEditItem(null);
          }}
          className="flex items-center gap-2"
        >
          <Plus size={18} /> Add Notification
        </Button>
      </div>

      <table className="min-w-full text-sm border-collapse rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedNotifications.map((notification) => (
            <tr
              key={notification._id}
              className="border-b hover:bg-gray-50 transition-all"
            >
              <td className="p-3">
                <img
                  src={notification.imageUrl}
                  alt="Notification"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>
              <td className="p-3 space-x-2">
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(notification._id)}
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
          disabled={currentPage === totalPages}
          icon={<ChevronRight className="w-5 h-5" />}
        >
          Next
        </Button>
      </div>

      {/* Modal for Adding/Editing Notification */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={`${editItem ? "Edit" : "Add"} Notification`}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Image
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
                required
              />
              {!preview && (
                <div className="py-8">
                  <p className="text-gray-500">Click to upload image</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Recommended size 400x400px
                  </p>
                </div>
              )}
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} isLoading={loading}>
              {editItem ? "Update" : "Add"} Notification
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PopupNotificationTable;
