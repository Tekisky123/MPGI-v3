import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import api from "../../data/Api";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import Input from "../../components/ui/Input";
import { Pencil, Trash2, ChevronDown } from "lucide-react";

const suggestionTypes = {
  alumni: "alumni",
  parent: "parent",
  student: "student",
  staff: "staff",
  press: "press",
};

const AdminSuggestionPage = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [editingSuggestion, setEditingSuggestion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterType, setFilterType] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const fetchSuggestions = useCallback(async () => {
    try {
      const { data } = await api.get("/suggestions/getAllSuggestions");
      setSuggestions(data.data);
    } catch (error) {
      toast.error("Failed to load suggestions");
    }
  }, []);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  const handleDelete = useCallback(async (id) => {
    if (window.confirm("Are you sure you want to delete this suggestion?")) {
      try {
        await api.delete(`/suggestions/delete/${id}`);
        toast.success("Suggestion deleted successfully");
        fetchSuggestions();
      } catch (error) {
        toast.error("Failed to delete suggestion");
      }
    }
  }, [fetchSuggestions]);

  const handleEdit = useCallback((suggestion) => {
    setEditingSuggestion(suggestion);
    setIsModalOpen(true);
  }, []);

  const handleUpdate = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await api.put(
          `/suggestions/update/${editingSuggestion._id}`,
          editingSuggestion
        );
        toast.success("Suggestion updated successfully");
        setIsModalOpen(false);
        fetchSuggestions();
      } catch (error) {
        toast.error("Failed to update suggestion");
      }
    },
    [editingSuggestion, fetchSuggestions]
  );

  const filteredSuggestions = suggestions.filter(
    (suggestion) => filterType === "all" || suggestion.type === filterType
  );

  return (
    <div className="min-h-screen">
      <div className="">
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Manage Suggestions
            </h1>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Filter by Type
                <ChevronDown className="ml-2 h-5 w-5" />
              </button>
              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <button
                      onClick={() => {
                        setFilterType("all");
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      All Types
                    </button>
                    {Object.entries(suggestionTypes).map(([key, value]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setFilterType(value);
                          setIsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {filteredSuggestions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No suggestions found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Suggestion
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredSuggestions.map((suggestion) => (
                    <tr key={suggestion._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {suggestion.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {suggestion.email}
                      </td>
                      <td className="px-6 py-4">{suggestion.suggestion}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(suggestion.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap space-x-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(suggestion)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Pencil className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(suggestion._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit Suggestion"
      >
        {editingSuggestion && (
          <form onSubmit={handleUpdate} className="space-y-4">
            <Input
              label="Name"
              value={editingSuggestion.name}
              onChange={(e) =>
                setEditingSuggestion({
                  ...editingSuggestion,
                  name: e.target.value,
                })
              }
            />
            <Input
              label="Email"
              type="email"
              value={editingSuggestion.email}
              onChange={(e) =>
                setEditingSuggestion({
                  ...editingSuggestion,
                  email: e.target.value,
                })
              }
            />
            <Input
              label="Suggestion"
              type="textarea"
              value={editingSuggestion.suggestion}
              onChange={(e) =>
                setEditingSuggestion({
                  ...editingSuggestion,
                  suggestion: e.target.value,
                })
              }
              rows={4}
            />
            <div className="flex justify-end gap-3 mt-6">
              <Button
                variant="secondary"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Update Suggestion</Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default AdminSuggestionPage;
