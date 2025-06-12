import { motion } from "framer-motion";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import polytechnicHero1 from "../../assets/poly/heroDesktop1.png";
import polytechnicHero2 from "../../assets/poly/heroDesktop2.jpg";
import polytechnicHero3 from "../../assets/poly/hero3.png";
import polytechnicHero4 from "../../assets/poly/hero4.png";
import polytechnicHero5 from "../../assets/poly/hero5.jpg";
import VishwabhartiPolytechnicQuickLinks from "./VishwabhartiPolytechnicQuickLinks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

interface Slide {
  img: string;
}

// Custom arrow components with responsive sizing
const NextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 md:p-3 lg:p-5 rounded-full transition-all duration-300"
    aria-label="Next slide"
  >
    <svg
      className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white"
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
      className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white"
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

const VishwabharatiPolytechnicHome = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopSlides: Slide[] = [
    { img: polytechnicHero1 },
    { img: polytechnicHero2 },
    { img: polytechnicHero3 },
  ];

  const mobileSlides: Slide[] = [
    { img: polytechnicHero3 },
    { img: polytechnicHero4 },
    { img: polytechnicHero5 },
  ];

  const slides: Slide[] = isMobile ? mobileSlides : desktopSlides;

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="w-full overflow-hidden bg-white">
      <div className="w-full">
        <div className="h-[32vh] sm:h-[60vh] md:h-[40vh] lg:h-[100vh] relative">
          <Slider {...sliderSettings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative h-[32vh] sm:h-[60vh] md:h-[40vh] lg:h-[100vh]"
              >
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-fill"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/60" />
                {/* Overlay Text Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="space-y-4"
                    >
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                        Welcome to Vishwabharti Polytechnic Institute
                      </h1>
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-mpgin-blue font-bold leading-tight">
                        Empowering Future Innovators
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <VishwabhartiPolytechnicQuickLinks />
    </div>
  );
};

export default VishwabharatiPolytechnicHome;
