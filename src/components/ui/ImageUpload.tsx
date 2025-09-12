import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Check, Trash2 } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (file: File | null) => void;
  currentImage?: File | null;
  aspectRatio?: number;
  maxSize?: number;
  acceptedFormats?: string[];
  placeholder?: string;
  className?: string;
}

interface CropArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelect,
  currentImage,
  aspectRatio = 1,
  maxSize = 5,
  acceptedFormats = ['image/jpeg', 'image/png', 'image/webp'],
  placeholder = 'Upload Photo',
  className = '',
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [showCropModal, setShowCropModal] = useState(false);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [cropArea, setCropArea] = useState<CropArea>({ x: 0, y: 0, width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleFileSelect = useCallback(
    (file: File) => {
      if (!acceptedFormats.includes(file.type)) {
        alert(`Please select a valid image format. Accepted formats: ${acceptedFormats.join(', ')}`);
        return;
      }
      if (file.size > maxSize * 1024 * 1024) {
        alert(`File size must be less than ${maxSize}MB`);
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setOriginalImage(imageUrl);
        setShowCropModal(true);
      };
      reader.readAsDataURL(file);
    },
    [acceptedFormats, maxSize]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        handleFileSelect(files[0]);
      }
    },
    [handleFileSelect]
  );

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        handleFileSelect(files[0]);
      }
    },
    [handleFileSelect]
  );

  const initializeCropArea = useCallback(() => {
    const canvas = canvasRef.current;
    const image = imageRef.current;
    if (!canvas || !image) return;

    const imageAspectRatio = image.width / image.height;
    const canvasAspectRatio = canvas.width / canvas.height;
    let drawWidth, drawHeight;
    if (imageAspectRatio > canvasAspectRatio) {
      drawWidth = canvas.width;
      drawHeight = drawWidth / imageAspectRatio;
    } else {
      drawHeight = canvas.height;
      drawWidth = drawHeight * imageAspectRatio;
    }

    let cropWidth, cropHeight;
    if (aspectRatio > 1) {
      cropHeight = Math.min(drawHeight * 0.8, drawWidth / aspectRatio);
      cropWidth = cropHeight * aspectRatio;
    } else {
      cropWidth = Math.min(drawWidth * 0.8, drawHeight * aspectRatio);
      cropHeight = cropWidth / aspectRatio;
    }
    const x = (drawWidth - cropWidth) / 2;
    const y = (drawHeight - cropHeight) / 2;

    setCropArea({ x, y, width: cropWidth, height: cropHeight });
  }, [aspectRatio]);

  const drawImage = useCallback(() => {
    const canvas = canvasRef.current;
    const image = imageRef.current;
    if (!canvas || !image) return;
  
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    // Clear the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Calculate image position and size
    const imageAspectRatio = image.width / image.height;
    const canvasAspectRatio = canvas.width / canvas.height;
    let drawWidth, drawHeight, drawX, drawY;
    if (imageAspectRatio > canvasAspectRatio) {
      drawWidth = canvas.width;
      drawHeight = drawWidth / imageAspectRatio;
      drawX = 0;
      drawY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = drawHeight * imageAspectRatio;
      drawX = (canvas.width - drawWidth) / 2;
      drawY = 0;
    }
  
    // Draw the image
    ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
  
    // Draw semi-transparent overlay over the entire canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Clear only the crop area (relative to the image's position)
    ctx.clearRect(
      drawX + cropArea.x,
      drawY + cropArea.y,
      cropArea.width,
      cropArea.height
    );
  
    // Draw the crop area border
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(
      drawX + cropArea.x,
      drawY + cropArea.y,
      cropArea.width,
      cropArea.height
    );
    ctx.setLineDash([]);
  }, [cropArea]);
  

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      if (
        mouseX >= cropArea.x &&
        mouseX <= cropArea.x + cropArea.width &&
        mouseY >= cropArea.y &&
        mouseY <= cropArea.y + cropArea.height
      ) {
        setIsDragging(true);
        setDragStart({
          x: mouseX - cropArea.x,
          y: mouseY - cropArea.y,
        });
      }
    },
    [cropArea]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const newX = mouseX - dragStart.x;
      const newY = mouseY - dragStart.y;
      const canvasWidth = canvasRef.current?.width || 0;
      const canvasHeight = canvasRef.current?.height || 0;
      setCropArea((prev) => ({
        ...prev,
        x: Math.max(0, Math.min(newX, canvasWidth - prev.width)),
        y: Math.max(0, Math.min(newY, canvasHeight - prev.height)),
      }));
    },
    [isDragging, dragStart]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const applyCrop = useCallback(() => {
    const canvas = canvasRef.current;
    const image = imageRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageAspectRatio = image.width / image.height;
    const canvasAspectRatio = canvas.width / canvas.height;
    let drawWidth, drawHeight, drawX, drawY;
    if (imageAspectRatio > canvasAspectRatio) {
      drawWidth = canvas.width;
      drawHeight = drawWidth / imageAspectRatio;
      drawX = 0;
      drawY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = drawHeight * imageAspectRatio;
      drawX = (canvas.width - drawWidth) / 2;
      drawY = 0;
    }

    const cropCanvas = document.createElement('canvas');
    const cropCtx = cropCanvas.getContext('2d');
    if (!cropCtx) return;

    cropCanvas.width = cropArea.width;
    cropCanvas.height = cropArea.height;

    const sourceX = ((cropArea.x - drawX) * image.width) / drawWidth;
    const sourceY = ((cropArea.y - drawY) * image.height) / drawHeight;
    const sourceWidth = (cropArea.width * image.width) / drawWidth;
    const sourceHeight = (cropArea.height * image.height) / drawHeight;

    cropCtx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, cropCanvas.width, cropCanvas.height);

    cropCanvas.toBlob(
      (blob) => {
        if (blob) {
          const file = new File([blob], 'cropped-image.jpg', { type: 'image/jpeg' });
          onImageSelect(file);
          setShowCropModal(false);
          setOriginalImage(null);
        }
      },
      'image/jpeg',
      0.9
    );
  }, [cropArea, onImageSelect]);

  const handleImageLoad = useCallback(() => {
    initializeCropArea();
    drawImage();
  }, [initializeCropArea, drawImage]);

  useEffect(() => {
    if (showCropModal && originalImage) {
      drawImage();
    }
  }, [drawImage, showCropModal, originalImage, cropArea]);

  const removeImage = useCallback(() => {
    onImageSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [onImageSelect]);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`
          relative w-full h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center bg-gray-50 transition-colors cursor-pointer
          ${isDragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
          ${currentImage ? 'border-green-500 bg-green-50' : ''}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedFormats.join(',')}
          onChange={handleFileInputChange}
          className="hidden"
        />
        {currentImage ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={URL.createObjectURL(currentImage)}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage();
                }}
                className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
            <p className="text-sm text-gray-600 mb-2">{placeholder}</p>
            <p className="text-xs text-gray-500">Click to browse or drag & drop</p>
            <p className="text-xs text-gray-400 mt-1">Max size: {maxSize}MB</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showCropModal && originalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Crop Image</h3>
                <button
                  onClick={() => setShowCropModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Drag the blue rectangle to reposition the crop area</p>
                  <p className="text-xs text-gray-500">The image will be cropped to the selected area</p>
                </div>
                <div className="flex justify-center">
                  <canvas
                    ref={canvasRef}
                    width={400}
                    height={300}
                    className="border border-gray-300 rounded cursor-move"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  />
                </div>
                <img
                  ref={imageRef}
                  src={originalImage}
                  alt="Original"
                  className="hidden"
                  onLoad={handleImageLoad}
                />
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setShowCropModal(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={applyCrop}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <Check size={16} />
                    Apply Crop
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageUpload;
