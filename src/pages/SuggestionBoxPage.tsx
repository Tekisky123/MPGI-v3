import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import api from '../data/Api';
import Input from '../components/ui/Input';
import { Loader } from 'lucide-react';

const SuggestionBoxPage = () => {
  const { type } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.suggestion.trim()) newErrors.suggestion = 'Suggestion is required';
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await api.post('/suggestions/create', {
        ...formData,
        type: suggestionTypes[type]
      });
      setShowConfirmation(true);
      setFormData({
        name: '',
        email: '',
        suggestion: ''
      });
    } catch (error) {
      toast.error('Failed to submit suggestion. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, type, validateForm]);

  const handleCloseConfirmation = useCallback(() => {
    setShowConfirmation(false);
   
  }, []);

  const getTitle = useCallback(() => {
    switch (type) {
      case 'alumni-suggestions': return 'Alumni Suggestions';
      case 'parent-suggestions': return 'Parent Suggestions';
      case 'student-suggestions': return 'Student Suggestions';
      case 'staff-suggestions': return 'Staff Suggestions';
      case 'press-suggestions': return 'Press Suggestions';
      default: return 'Suggestions';
    }
  }, [type]);

  const suggestionTypes = {
    'alumni-suggestions': 'alumni',
    'parent-suggestions': 'parent',
    'student-suggestions': 'student',
    'staff-suggestions': 'staff',
    'press-suggestions': 'press'
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {getTitle()}
            </h1>
            <p className="text-gray-600">
              We value your feedback! Please share your suggestions with us.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

              <div>
                <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Suggestion
                </label>
                <textarea
                  id="suggestion"
                  name="suggestion"
                  value={formData.suggestion}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.suggestion && <p className="text-red-500 text-sm mt-1">{errors.suggestion}</p>}
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-mpgin-blue text-mpgin-darkBlue font-bold py-2 px-6  transition duration-200 flex items-center justify-center"
              >
                {isSubmitting ? <Loader color="#ffffff" size={20} /> : 'Submit Suggestion'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black z-50 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-6">Your suggestion has been submitted successfully.</p>
            <button
              onClick={handleCloseConfirmation}
              className="w-full bg-mpgin-blue text-mpgin-darkBlue font-bold py-2 px-4 transition duration-200"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestionBoxPage;
