import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../data/Api";

interface AlumniData {
  name: string;
  yearOfPassing: string;
  profilePhoto: File | null;
  company: string;
  designation: string;
  package: string;
  college: string;
  department: string;
  email: string;
  phone: string;
  linkedin?: string;
}

const colleges = [
  "School of Engineering",
  "School of Management",
  "Vishwabharati Polytechnic Institute",
];

const engineeringDepartments = [
  "Computer Science & Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Electronics and Telecommunication Engineering",
  "Basic Sciences and Humanities (FE)",
  "Training & Placement",
];

const managementDepartments = ["MBA"];
managementDepartments.push("Training & Placement");

const polytechnicDepartments = [
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Computer Engineering",
  "Information Technology",
  "Electronics and Telecommunication",
  "Basic Sciences and Humanities (FE)",
  "Training & Placement",
];

const AlumniAssociationForm = () => {
  const [alumniData, setAlumniData] = useState<AlumniData>({
    name: "",
    yearOfPassing: "",
    profilePhoto: null,
    company: "",
    designation: "",
    package: "",
    college: "",
    department: "",
    email: "",
    phone: "",
    linkedin: "",
  });

  const [departments, setDepartments] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (alumniData.college === "School of Engineering") {
      setDepartments(engineeringDepartments);
    } else if (alumniData.college === "School of Management") {
      setDepartments(managementDepartments);
    } else if (alumniData.college === "Vishwabharati Polytechnic Institute") {
      setDepartments(polytechnicDepartments);
    } else {
      setDepartments([]);
    }
    // Reset department when college changes
    setAlumniData((prev) => ({ ...prev, department: "" }));
  }, [alumniData.college]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setAlumniData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAlumniData((prev) => ({ ...prev, profilePhoto: file }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", alumniData.name);
      formData.append("yearOfPassing", alumniData.yearOfPassing);
      if (alumniData.profilePhoto) {
        formData.append("profilePhoto", alumniData.profilePhoto);
      }
      formData.append("company", alumniData.company);
      formData.append("designation", alumniData.designation);
      formData.append("package", alumniData.package);
      formData.append("college", alumniData.college);
      formData.append("department", alumniData.department);
      formData.append("email", alumniData.email);
      formData.append("phone", alumniData.phone);
      if (alumniData.linkedin) {
        formData.append("linkedin", alumniData.linkedin);
      }

      const response = await api.post(
        "/alumni/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Alumni data submitted successfully!", {
        description: "Thank you for registering with the Alumni Registration.",
      });

      // Reset form
      setAlumniData({
        name: "",
        yearOfPassing: "",
        profilePhoto: null,
        company: "",
        designation: "",
        package: "",
        college: "",
        department: "",
        email: "",
        phone: "",
        linkedin: "",
      });
      setPreviewImage(null);
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit alumni data", {
        description: "Please try again later or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: 30 },
    (_, i) => currentYear - i
  ).reverse();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-mpgin-darkBlue mb-2">
            Alumni Registration
          </h1>
          <p className="text-gray-600">
            Join our alumni network and stay connected with your alma mater
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-mpgin-darkBlue border-b pb-2">
                Personal Information
              </h2>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={alumniData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mpgin-darkBlue focus:border-mpgin-darkBlue"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={alumniData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mpgin-darkBlue focus:border-mpgin-darkBlue"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={alumniData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mpgin-darkBlue focus:border-mpgin-darkBlue"
                />
              </div>

              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  LinkedIn Profile (Optional)
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={alumniData.linkedin || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mpgin-darkBlue focus:border-mpgin-darkBlue"
                />
              </div>
            </motion.div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-mpgin-darkBlue border-b pb-2">
                Profile Photo
              </h2>

              <div className="flex flex-col items-center">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Profile preview"
                    className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-mpgin-darkBlue"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-500">
                    No image
                  </div>
                )}

                <label className="cursor-pointer bg-mpgin-blue font-semibold px-4 py-2 rounded-md  transition">
                  <span>Upload Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  JPEG or PNG, max 2MB
                </p>
              </div>
            </motion.div>
          </div>

          {/* Academic Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-mpgin-darkBlue border-b pb-2">
              Academic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="college"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  College <span className="text-red-500">*</span>
                </label>
                <select
                  id="college"
                  name="college"
                  value={alumniData.college}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mpgin-darkBlue focus:border-mpgin-darkBlue"
                >
                  <option value="">Select College</option>
                  {colleges.map((college) => (
                    <option key={college} value={college}>
                      {college}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Department <span className="text-red-500">*</span>
                </label>
                <select
                  id="department"
                  name="department"
                  value={alumniData.department}
                  onChange={handleInputChange}
                  required
                  disabled={!alumniData.college}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mpgin-darkBlue focus:border-mpgin-darkBlue disabled:bg-gray-100"
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="yearOfPassing"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Year of Passing <span className="text-red-500">*</span>
                </label>
                <select
                  id="yearOfPassing"
                  name="yearOfPassing"
                  value={alumniData.yearOfPassing}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mpgin-darkBlue focus:border-mpgin-darkBlue"
                >
                  <option value="">Select Year</option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Professional Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-mpgin-darkBlue border-b pb-2">
              Professional Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Current Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={alumniData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mpgin-darkBlue focus:border-mpgin-darkBlue"
                />
              </div>

              <div>
                <label
                  htmlFor="designation"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Designation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={alumniData.designation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mpgin-darkBlue focus:border-mpgin-darkBlue"
                />
              </div>

              <div>
                <label
                  htmlFor="package"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Annual Package (INR) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="package"
                  name="package"
                  value={alumniData.package}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mpgin-darkBlue focus:border-mpgin-darkBlue"
                  placeholder="e.g., 10,00,000"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-4"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto  px-8 py-3 rounded-md  bg-mpgin-blue font-semibold transition flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  Submitting...
                </>
              ) : (
                "Submit Registration"
              )}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default AlumniAssociationForm;
