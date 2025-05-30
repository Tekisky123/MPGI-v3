import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { X, Loader2, AlertCircle, User, GraduationCap, Briefcase, CalendarDays } from "lucide-react";
import { FacultyMember } from "../../data/SchoolOfEngineeringQuickLinkData";
import api from "../../data/Api";

const FacultyCard = ({
    member,
    index,
    onClick,
}: {
    member: FacultyMember;
    index: number;
    onClick: () => void;
}) => (
    <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
        whileHover={{ y: -5 }}
        className="group relative cursor-pointer rounded-xl bg-white shadow-sm hover:shadow-lg transition-all"
        onClick={onClick}
    >
        <div className="p-6 flex items-start gap-4">
            <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center shadow-inner">
                    {member.photo ? (
                        <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0YjU1NmIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNMTIgMjEuOGE5IDkgMCAwIDAtOS05IDkgOSAwIDAgMSAxOCAwIi8+PC9zdmc+';
                            }}
                        />
                    ) : (
                        <User className="w-8 h-8 text-gray-400" />
                    )}
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-md font-semibold text-gray-900 truncate">{member.name}</h3>
                <p className="text-mpgin-blue font-medium mb-1">{member.designation}</p>
                <div className="text-sm text-gray-600 space-y-1">
                    <p className="text-gray-500 text-sm font-medium">{member.department}</p>
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-gray-400" />
                        <span>{member.experience} Experience</span>
                    </div>
                </div>
            </div>
        </div>
    </motion.article>
);

const SchoolOfEngineeringFaculty = () => {
    const collegeId = "school-of-engineering"
    const [faculty, setFaculty] = useState<FacultyMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null);

    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                setLoading(true);
                const response = await api.get<FacultyMember[]>(`/faculty/college/${collegeId}`);
                setFaculty(response.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load faculty");
            } finally {
                setLoading(false);
            }
        };

        fetchFaculty();
    }, [collegeId]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedMember(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    if (loading) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
                >
                    <Loader2 className="w-12 h-12 text-mpgin-blue animate-spin" />
                </motion.div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 p-8 rounded-2xl max-w-md flex items-start gap-5 shadow-lg"
                >
                    <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                        <h2 className="text-2xl font-bold text-red-800 mb-2">Loading Error</h2>
                        <p className="text-red-700">{error}</p>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
           

            {faculty.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100"
                >
                    <div className="flex flex-col items-center gap-4 text-gray-500">
                        <User className="w-12 h-12 text-gray-400" />
                        <p className="text-lg font-medium">No faculty members found</p>
                    </div>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {faculty.map((member, index) => (
                        <FacultyCard
                            key={member._id}
                            member={member}
                            index={index}
                            onClick={() => setSelectedMember(member)}
                        />
                    ))}
                </div>
            )}

            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            className="relative max-w-2xl w-full p-4"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-full md:w-1/3">
                                        <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden shadow-sm border border-gray-200">
                                            {selectedMember.photo ? (
                                                <img
                                                    src={selectedMember.photo}
                                                    alt={selectedMember.name}
                                                    className="w-full h-full object-contain"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0YjU1NmIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNMTIgMjEuOGE5IDkgMCAwIDAtOS05IDkgOSAwIDAgMSAxOCAwIi8+PC9zdmc+';
                                                    }}
                                                />
                                            ) : (
                                                <User className="w-full h-full text-gray-300 p-6" />
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <h2 className="text-3xl font-bold text-gray-900">
                                            {selectedMember.name}
                                        </h2>
                                        <div className="space-y-2">
                                            <p className="text-mpgin-blue font-semibold text-lg">
                                                {selectedMember.designation}
                                            </p>
                                            <p className="text-gray-600 font-medium">
                                                {selectedMember.department}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-gray-600">
                                                <GraduationCap className="w-5 h-5 text-mpgin-blue" />
                                                <div>
                                                    <p className="font-medium">Qualification</p>
                                                    <p>{selectedMember.qualification}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-600">
                                                <Briefcase className="w-5 h-5 text-mpgin-blue" />
                                                <div>
                                                    <p className="font-medium">Experience</p>
                                                    <p>{selectedMember.experience}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-600">
                                                <CalendarDays className="w-5 h-5 text-mpgin-blue" />
                                                <div>
                                                    <p className="font-medium">Joined Date</p>
                                                    <p>
                                                        {new Date(selectedMember.dateOfJoining).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="absolute top-6 right-6 bg-white hover:bg-gray-50 p-2 rounded-full shadow-lg transition-colors"
                                    onClick={() => setSelectedMember(null)}
                                    aria-label="Close modal"
                                >
                                    <X className="w-6 h-6 text-gray-700" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SchoolOfEngineeringFaculty;