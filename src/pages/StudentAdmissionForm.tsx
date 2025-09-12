import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageUpload from '../components/ui/ImageUpload'; // Ensure this is imported if used

interface AcademicDetails {
  tenth: { marks: string; percentage: string; year: string };
  twelfth: { marks: string; percentage: string; year: string };
  diploma: { marks: string; percentage: string; year: string };
  pcm: { marks: string; percentage: string; year: string };
  cet: { marks: string; percentage: string; year: string };
}

interface FormData {
  email: string;
  password: string;
  applicationId1: string;
  applicationId2: string;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  contactNumber: string;
  studentEmail: string;
  category: string;
  address: string;
  academicDetails: AcademicDetails;
  selectedCourses: string[];
  admissionType: string[];
  finalBranch: string;
  year: string;
  photo: File | null;
  studentSignature: File | null;
  parentSignature: File | null;
  adminSignature: File | null;
  principalSignature: File | null;
}

interface StudentAdmissionFormProps {
  // Add any props you want to pass to this component
}

const StudentAdmissionForm: React.FC<StudentAdmissionFormProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    applicationId1: '',
    applicationId2: '',
    fullName: '',
    dateOfBirth: '',
    gender: '',
    contactNumber: '',
    studentEmail: '',
    category: '',
    address: '',
    academicDetails: {
      tenth: { marks: '', percentage: '', year: '' },
      twelfth: { marks: '', percentage: '', year: '' },
      diploma: { marks: '', percentage: '', year: '' },
      pcm: { marks: '', percentage: '', year: '' },
      cet: { marks: '', percentage: '', year: '' }
    },
    selectedCourses: [],
    admissionType: [],
    finalBranch: '',
    year: '',
    photo: null,
    studentSignature: null,
    parentSignature: null,
    adminSignature: null,
    principalSignature: null
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // Handle academic details change
  const handleAcademicChange = (qualification: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      academicDetails: {
        ...prev.academicDetails,
        [qualification]: {
          ...prev.academicDetails[qualification as keyof typeof prev.academicDetails],
          [field]: value
        }
      }
    }));
  };

  // Handle course selection
  const handleCourseChange = (course: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      selectedCourses: checked
        ? [...prev.selectedCourses, course]
        : prev.selectedCourses.filter(c => c !== course)
    }));
  };

  // Handle admission type change
  const handleAdmissionTypeChange = (type: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      admissionType: checked
        ? [...prev.admissionType, type]
        : prev.admissionType.filter(t => t !== type)
    }));
  };

  // Handle file upload
  const handleFileUpload = (field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.address) newErrors.address = 'Address is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (formData.studentEmail && !emailRegex.test(formData.studentEmail)) {
      newErrors.studentEmail = 'Please enter a valid email address';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (formData.contactNumber && !phoneRegex.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid 10-digit phone number';
    }

    if (formData.selectedCourses.length === 0) {
      newErrors.courses = 'Please select at least one course';
    }

    if (formData.admissionType.length === 0) {
      newErrors.admissionType = 'Please select admission type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'academicDetails') {
          submitData.append(key, JSON.stringify(value));
        } else if (key === 'selectedCourses' || key === 'admissionType') {
          submitData.append(key, JSON.stringify(value));
        } else if (value instanceof File) {
          submitData.append(key, value);
        } else if (value !== null && value !== undefined) {
          submitData.append(key, String(value));
        }
      });

      const response = await fetch('/api/admission/submit', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        setFormData({
          email: '',
          password: '',
          applicationId1: '',
          applicationId2: '',
          fullName: '',
          dateOfBirth: '',
          gender: '',
          contactNumber: '',
          studentEmail: '',
          category: '',
          address: '',
          academicDetails: {
            tenth: { marks: '', percentage: '', year: '' },
            twelfth: { marks: '', percentage: '', year: '' },
            diploma: { marks: '', percentage: '', year: '' },
            pcm: { marks: '', percentage: '', year: '' },
            cet: { marks: '', percentage: '', year: '' }
          },
          selectedCourses: [],
          admissionType: [],
          finalBranch: '',
          year: '',
          photo: null,
          studentSignature: null,
          parentSignature: null,
          adminSignature: null,
          principalSignature: null
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
    >
      <h2 className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300">
        Student Admission Form
      </h2>
      {/* Admission Form */}
      <div className="bg-white border border-gray-300 rounded-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-mpgin-darkBlue">MPGI SCHOOL OF ENGINEERING, KHUPSARWADI NANDED</h3>
          <h4 className="text-md font-semibold text-gray-700 mt-2">INSTITUTE LEVEL APPLICATION FORM 2025-26</h4>
        </div>
        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Initial Application Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter password"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Application ID</label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">EN25-</span>
                  <input
                    type="text"
                    value={formData.applicationId1}
                    onChange={(e) => handleInputChange('applicationId1', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue"
                    placeholder="Enter ID"
                  />
                  <span className="text-sm font-medium">-DSE25-</span>
                  <input
                    type="text"
                    value={formData.applicationId2}
                    onChange={(e) => handleInputChange('applicationId2', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue"
                    placeholder="Enter ID"
                  />
                </div>
              </div>
            </div>

            {/* Photo Upload Section */}
            <div className="flex justify-center">
              <ImageUpload
                onImageSelect={(file) => handleFileUpload('photo', file)}
                currentImage={formData.photo}
                aspectRatio={1}
                maxSize={5}
                acceptedFormats={['image/jpeg', 'image/png', 'image/webp']}
                placeholder="Upload Student Photo"
                className="w-48 h-48"
              />
            </div>
          </div>

          {/* Student Details */}
          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold text-mpgin-darkBlue mb-4">Student Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue ${
                    errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue ${
                    errors.gender ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue ${
                    errors.contactNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter contact number"
                />
                {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                <input
                  type="email"
                  value={formData.studentEmail}
                  onChange={(e) => handleInputChange('studentEmail', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue ${
                    errors.studentEmail ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter email ID"
                />
                {errors.studentEmail && <p className="text-red-500 text-sm mt-1">{errors.studentEmail}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Category</option>
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="ews">EWS</option>
                </select>
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea
                  rows={3}
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter complete address"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
            </div>
          </div>

          {/* Academic Details */}
          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold text-mpgin-darkBlue mb-4">Academic Details</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Qualification</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Obtained Marks/Total Marks</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Percentage</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Passing Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">10th</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={formData.academicDetails.tenth.marks}
                        onChange={(e) => handleAcademicChange('tenth', 'marks', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-mpgin-blue"
                        placeholder="e.g., 450/500"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={formData.academicDetails.tenth.percentage}
                        onChange={(e) => handleAcademicChange('tenth', 'percentage', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-mpgin-blue"
                        placeholder="90%"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={formData.academicDetails.tenth.year}
                        onChange={(e) => handleAcademicChange('tenth', 'year', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-mpgin-blue"
                        placeholder="2020"
                      />
                    </td>
                  </tr>
                  {/* Repeat for other academic rows (12th, Diploma, PCM, CET) */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Course Selection */}
          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold text-mpgin-darkBlue mb-4">Course Selection/Preference</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-md font-medium text-gray-700 mb-3">Courses</h5>
                <div className="space-y-2">
                  {[
                    "Computer Science",
                    "AIDS (Artificial Intelligence & Data Science)",
                    "AIML (Artificial Intelligence & Machine Learning)",
                    "Electrical",
                    "Mechanical",
                    "E&TC (Electronics & Telecommunication)",
                    "Civil"
                  ].map((course) => (
                    <label key={course} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.selectedCourses.includes(course)}
                        onChange={(e) => handleCourseChange(course, e.target.checked)}
                        className="rounded border-gray-300 text-mpgin-blue focus:ring-mpgin-blue"
                      />
                      <span className="text-sm text-gray-700">{course}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-md font-medium text-gray-700 mb-3">Admission Type</h5>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.admissionType.includes('First Year')}
                      onChange={(e) => handleAdmissionTypeChange('First Year', e.target.checked)}
                      className="rounded border-gray-300 text-mpgin-blue focus:ring-mpgin-blue"
                    />
                    <span className="text-sm text-gray-700">First Year</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.admissionType.includes('DSE')}
                      onChange={(e) => handleAdmissionTypeChange('DSE', e.target.checked)}
                      className="rounded border-gray-300 text-mpgin-blue focus:ring-mpgin-blue"
                    />
                    <span className="text-sm text-gray-700">DSE (Direct Second Year Engineering)</span>
                  </label>
                </div>
                {errors.courses && <p className="text-red-500 text-sm mt-1">{errors.courses}</p>}
                {errors.admissionType && <p className="text-red-500 text-sm mt-1">{errors.admissionType}</p>}
              </div>
            </div>
          </div>

          {/* Final Admission Details */}
          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold text-mpgin-darkBlue mb-4">Final Admission Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Final Admitted Branch</label>
                <input
                  type="text"
                  value={formData.finalBranch}
                  onChange={(e) => handleInputChange('finalBranch', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue"
                  placeholder="Enter admitted branch"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mpgin-blue"
                  placeholder="Enter year"
                />
              </div>
            </div>
          </div>

          {/* Signatures */}
          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold text-mpgin-darkBlue mb-4">Signatures</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Signature of Student</label>
                <ImageUpload
                  onImageSelect={(file) => handleFileUpload('studentSignature', file)}
                  currentImage={formData.studentSignature}
                  aspectRatio={3}
                  maxSize={2}
                  acceptedFormats={['image/jpeg', 'image/png', 'image/webp']}
                  placeholder="Upload Student Signature"
                  className="h-20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Signature of Parent</label>
                <ImageUpload
                  onImageSelect={(file) => handleFileUpload('parentSignature', file)}
                  currentImage={formData.parentSignature}
                  aspectRatio={3}
                  maxSize={2}
                  acceptedFormats={['image/jpeg', 'image/png', 'image/webp']}
                  placeholder="Upload Parent Signature"
                  className="h-20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Signature of Administrative Officer</label>
                <ImageUpload
                  onImageSelect={(file) => handleFileUpload('adminSignature', file)}
                  currentImage={formData.adminSignature}
                  aspectRatio={3}
                  maxSize={2}
                  acceptedFormats={['image/jpeg', 'image/png', 'image/webp']}
                  placeholder="Upload Admin Officer Signature"
                  className="h-20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Signature of Principal</label>
                <ImageUpload
                  onImageSelect={(file) => handleFileUpload('principalSignature', file)}
                  currentImage={formData.principalSignature}
                  aspectRatio={3}
                  maxSize={2}
                  acceptedFormats={['image/jpeg', 'image/png', 'image/webp']}
                  placeholder="Upload Principal Signature"
                  className="h-20"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="border-t pt-6">
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`font-medium py-3 px-8 rounded-lg transition-colors duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-mpgin-blue hover:bg-mpgin-darkBlue text-white'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </div>
        </form>
        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-gray-300">
          <div className="flex justify-between text-sm text-gray-600">
            <span>MPGL, School of Engineering, Nanded. Nanded.</span>
            <span>MPGI, School of Engineering.</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentAdmissionForm;
