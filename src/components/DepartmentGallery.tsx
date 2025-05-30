import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import api from "../data/Api";
import { X, AlertCircle, Loader2 } from "lucide-react";

interface GalleryImage {
  _id: string;
  title: string;
  image: string;
}

const DepartmentGallery = () => {
  const { collegeId, departmentId } = useParams();
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await api.get<GalleryImage[]>(
          `/gallery/college/${collegeId}/department/${departmentId}`
        );
        setGallery(response.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load gallery images");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [collegeId, departmentId]);

  const handleCloseModal = (e: React.MouseEvent | KeyboardEvent) => {
    if (e instanceof MouseEvent && e.target !== e.currentTarget) return;
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && handleCloseModal(e);
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedImage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-red-600 bg-red-50 p-4 rounded-xl flex items-center gap-3">
          <AlertCircle className="w-6 h-6 flex-shrink-0" />
          <span className="font-medium">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {gallery.length === 0 ? (
        <div className="text-gray-500 text-center py-12 bg-gray-50 rounded-xl">
          <p className="font-medium text-lg">No gallery images found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          {gallery.map((image) => (
            <motion.div
              key={image._id}
              layout
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.03 }}
              className="relative group cursor-pointer aspect-square"
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlZWVlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSI+R2FsbGVyeSBJbWFnZTwvdGV4dD48L3N2Zz4=';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 space-y-1">
                  <p className="text-white font-medium text-sm truncate px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full inline-block">
                    {image.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 text-gray-600 hover:text-gray-800 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-video max-h-[80vh]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-lg font-semibold text-center">
                    {selectedImage.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DepartmentGallery;