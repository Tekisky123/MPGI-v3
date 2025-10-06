import { motion } from "framer-motion";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import SchoolOfEngineeringQuickLinks from "./SchoolOfEngineeringQuickLinks";
// import feesStructure from '../../assets/pdf/fees_structure.pdf';
import appprovedFeesStructure from '../../assets/pdf/appproved_fees_2025-26.pdf';
import revisedFeesStructure from '../../assets/pdf/revised_fees_2024-25.pdf';

// Import images for the slider
import img1 from "../../assets/engineering/hero1.jpg";
import img2 from "../../assets/engineering/hero2.jpg";
import img3 from "../../assets/engineering/hero3.jpg";
import img4 from "../../assets/engineering/hero4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollingText from "../../components/ScrollingText";

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
        <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] relative">
          <Slider {...sliderSettings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
              >
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
               
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <ScrollingText 
        backgroundColor="#e0f2fe"
        speed={20}
        items={[
          {
            text:"📢 Fee Structure for 2025–26 as approved by FRA, Click here to download.",
            link:appprovedFeesStructure,
            textColor:"#0369a1"
          },
          {
            text:"📢 Revised Fee Structure for 2024–25, Click here to download.",
            link:revisedFeesStructure,
            textColor:"#0369a1"
          }
        ]}
        
      />
      <SchoolOfEngineeringQuickLinks />
    </div>
  );
};

export default SchoolOfEngineeringHome;
