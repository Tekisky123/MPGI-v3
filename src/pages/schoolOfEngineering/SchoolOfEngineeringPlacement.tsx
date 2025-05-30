import { motion } from "framer-motion";
import { engineeringAlumni } from "../../data/alumniData";

// Helper function to render content with line breaks and markdown-like formatting
const renderContent = (content: string) => {
  const paragraphs = content.split("\n");

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        if (paragraph.startsWith("![")) {
          // Handle image markdown syntax
          const imageAlt = paragraph.match(/!\[(.*?)\]/)?.[1] || "";
          const imageSrc = paragraph.match(/\((.*?)\)/)?.[1] || "";
          return (
            <div key={index} className="my-4">
              <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
            </div>
          );
        } else if (paragraph.startsWith("-")) {
          return (
            <ul
              key={index}
              className="list-disc pl-6 space-y-1 text-gray-700 font-semibold"
            >
              {paragraph
                .slice(1)
                .split(", ")
                .map((item, i) => (
                  <li key={i}>{item.trim()}</li>
                ))}
            </ul>
          );
        } else if (
          paragraph.startsWith("## ") ||
          paragraph.startsWith("### ")
        ) {
          return (
            <h3
              key={index}
              className="text-xl font-bold text-mpgin-darkBlue mt-4 mb-2"
            >
              {paragraph.slice(3)}
            </h3>
          );
        } else if (paragraph.startsWith("# ")) {
          return (
            <h2
              key={index}
              className="text-2xl font-bold text-mpgin-darkBlue mt-6 mb-3 border-b pb-2 border-gray-300"
            >
              {paragraph.slice(2)}
            </h2>
          );
        } else if (
          (paragraph.startsWith("**") && paragraph.endsWith("**")) ||
          (paragraph.startsWith("*") && paragraph.endsWith("*"))
        ) {
          return (
            <p key={index} className="font-bold text-gray-800">
              {paragraph.slice(1, -1)}
            </p>
          );
        } else {
          return (
            <p key={index} className="text-gray-700">
              {paragraph}
            </p>
          );
        }
      })}
    </>
  );
};

const SchoolOfEngineeringPlacement = () => {
  return (
    <section className=" bg-white min-h-screen">
      <div className="w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {engineeringAlumni.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-white rounded-lg shadow-md p-4 border border-gray-200 flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <img
                src={alumni.image}
                alt={alumni.name}
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <h4 className="text-lg font-bold text-mpgin-darkBlue text-center capitalize">
                {alumni.name}
              </h4>
              <p className="text-gray-700 text-sm text-center capitalize">
                {alumni.profile}
              </p>
              <p className="text-gray-700 text-sm text-center">
                Selected In: {alumni.selectedIn}
              </p>
              <p className="text-gray-700 text-sm text-center">
                Package: {alumni.package}
              </p>
              {alumni.content && (
                <div className="mt-2 text-gray-700 text-xs text-center">
                  {renderContent(alumni.content)}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolOfEngineeringPlacement;
