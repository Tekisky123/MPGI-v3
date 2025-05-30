import { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';
import api from '../../data/Api';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Modal from '../../components/ui/Modal';


interface Admin {
  _id: string;
  name: string;
  email: string;
}

const ManageAdmins = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteCandidate, setDeleteCandidate] = useState<Admin | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [editData, setEditData] = useState<Partial<Admin>>({});
  const [loading, setLoading] = useState({ action: '', isLoading: false });

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const { data } = await api.get('/user/getAllUsers');
      setAdmins(data);
    } catch (error: any) {
      toast.error('Failed to fetch admins');
    }
  };

  const handleAddAdmin = async () => {
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      toast.error('Please fill all fields');
      return;
    }
    setLoading({ action: 'add', isLoading: true });
    try {
      await api.post('/user/register', formData);
      toast.success('Admin added successfully');
      setFormData({ name: '', email: '', password: '' });
      setIsModalOpen(false);
      await fetchAdmins();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Error adding admin');
    } finally {
      setLoading({ action: '', isLoading: false });
    }
  };

  const handleUpdateAdmin = async (_id: string) => {
    const { name, email } = editData;
    if (!name?.trim() || !email?.trim()) {
      toast.error('Please fill required fields');
      return;
    }
    setLoading({ action: 'update', isLoading: true });
    try {
      await api.put(`/user/updateOneUser/${_id}`, editData);
      toast.success('Admin updated successfully');
      setEditingId(null);
      await fetchAdmins();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Error updating admin');
    } finally {
      setLoading({ action: '', isLoading: false });
    }
  };

  const handleDeleteAdmin = async () => {
    if (!deleteCandidate) return;
    setLoading({ action: 'delete', isLoading: true });
    try {
      await api.delete(`/user/deleteOneUser/${deleteCandidate._id}`);
      toast.success('Admin deleted successfully');
      setDeleteCandidate(null);
      await fetchAdmins();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Error deleting admin');
    } finally {
      setLoading({ action: '', isLoading: false });
    }
  };

  const renderCell = (admin: Admin, field: 'name' | 'email') =>
    editingId === admin._id ? (
      <input
        value={editData[field] || ''}
        onChange={(e) => setEditData({ ...editData, [field]: e.target.value })}
        className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
      />
    ) : (
      <span className="px-2">{admin[field]}</span>
    );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Manage Admins
          </h2>
          <p className="text-sm text-gray-600 mt-1">Add, edit, or remove admin accounts</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all"
          disabled={loading.isLoading}
        >
          <PlusIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Add Admin</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3.5 font-semibold text-gray-600">Name</th>
              <th className="px-4 py-3.5 font-semibold text-gray-600">Email</th>
              <th className="px-4 py-3.5 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {admins.map((admin) => (
              <tr key={admin._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5">{renderCell(admin, 'name')}</td>
                <td className="px-4 py-3.5">{renderCell(admin, 'email')}</td>
                <td className="px-4 py-3.5">
                  {editingId === admin._id ? (
                    <div className="flex gap-3">
                      <Button
                        onClick={() => handleUpdateAdmin(admin._id)}
                        variant="primary"
                        isLoading={loading.action === 'update'}
                      >
                        {loading.action === 'update' ? 'Saving...' : 'Save'}
                      </Button>
                      <Button
                        onClick={() => setEditingId(null)}
                        variant="secondary"
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <Button
                        onClick={() => {
                          setEditingId(admin._id);
                          setEditData({ name: admin.name, email: admin.email });
                        }}
                        variant="secondary"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </Button>
                      <Button
                        onClick={() => setDeleteCandidate(admin)}
                        variant="danger"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </Button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Admin Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Admin">
        <div className="space-y-4">
          <Input
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddAdmin} isLoading={loading.action === 'add'}>
              {loading.action === 'add' ? 'Adding...' : 'Add Admin'}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!deleteCandidate}
        onClose={() => setDeleteCandidate(null)}
        title="Confirm Delete"
      >
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete admin {deleteCandidate?.name} ({deleteCandidate?.email})?
        </p>
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={() => setDeleteCandidate(null)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteAdmin} isLoading={loading.action === 'delete'}>
            {loading.action === 'delete' ? 'Deleting...' : 'Delete'}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ManageAdmins;