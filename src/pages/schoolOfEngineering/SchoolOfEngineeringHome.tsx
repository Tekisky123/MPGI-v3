import { motion } from "framer-motion";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import SchoolOfEngineeringQuickLinks from "./SchoolOfEngineeringQuickLinks";

// Import 4 images for the slider (make sure these are optimized)
import img1 from "../../assets/engineering/hero1.jpg";
import img2 from "../../assets/engineering/hero2.jpg";
import img3 from "../../assets/engineering/hero3.jpg";
import img4 from "../../assets/engineering/hero4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  img: string;
}

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 md:p-3 lg:p-5 rounded-full transition-all duration-300"
    aria-label="Next slide"
  >
    <svg
      className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9 5 7 7-7 7"
      />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 md:p-3 lg:p-5 rounded-full transition-all duration-300"
    aria-label="Previous slide"
  >
    <svg
      className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m15 19-7-7 7-7"
      />
    </svg>
  </button>
);

const SchoolOfEngineeringHome = () => {
  const slides: Slide[] = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
  ];

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 700, // increased duration for smoother fade
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // slower autoplay for better UX and perf
    fade: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Slider */}
      <div className="relative min-h-[80vh] bg-mpgin-darkBlue text-white">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="h-[80vh] relative">
              {/* Image with solid overlay for better GPU compositing */}
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
                style={{ willChange: "transform" }} // hint GPU acceleration
              />
              {/* Overlay with dark transparent background instead of image opacity */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </Slider>

        {/* Overlay Text Content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Welcome to
                <span className="block mt-4 text-mpgin-blue">
                  Matoshri Pratishthan School of Engineering
                </span>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <SchoolOfEngineeringQuickLinks />
    </div>
  );
};

export default SchoolOfEngineeringHome;
