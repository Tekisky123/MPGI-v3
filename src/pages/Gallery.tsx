import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { X, Loader2, AlertCircle, Image as ImageIcon } from "lucide-react";
import api from "../data/Api";

interface GalleryItem {
  _id: string;
  title: string;
  image: string;
  category: string;
}

export default function CollegeGallery() {
  const { collegeId } = useParams();
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const response = await api.get<GalleryItem[]>(`/gallery/college/${collegeId}`);
        setGalleryItems(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load gallery");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [collegeId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
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
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}

      <header className="bg-mpgin-blue text-white">
        <motion.div
          className="relative h-64 lg:h-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-mpgin-darkBlue text-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Campus Gallery
                <span className="block text-mpgin-blue mt-2">At MPGIN</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl">
                Capturing moments of excellence and innovation
              </p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Gallery Grid */}
      <main className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {galleryItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-2xl shadow-sm"
            >
              <div className="flex flex-col items-center gap-4 text-gray-500">
                <ImageIcon className="w-12 h-12" />
                <p className="text-lg">No gallery items available</p>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <GalleryCard
                  key={item._id}
                  item={item}
                  index={index}
                  onClick={() => setSelectedImage(item)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full p-4"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video max-h-[80vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                  <p className="text-blue-200 mt-1">{selectedImage.category}</p>
                </div>
              </div>

              <button
                className="absolute top-6 right-6 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const GalleryCard = ({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    whileHover={{ scale: 1.02 }}
    className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    onClick={onClick}
  >
    <div className="aspect-square">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform">
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 truncate">{item.title}</h3>
          <p className="text-mpgin-blue font-medium text-sm mt-1">{item.category}</p>
        </div>
      </div>
    </div>
  </motion.article>
);