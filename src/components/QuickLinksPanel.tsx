import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import ProfilePage from '../pages/ProfilePage'; // Ensure this is correctly imported

const QuickLinksPanel = () => {
  const [activeId, setActiveId] = useState('President');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Updated navItems to include all profiles
  const navItems = [
    { label: "President", id: 'President' },
    { label: "Secretary", id: 'secretary' },
    { label: "Managing Director", id: 'managing-director' },
    { label: "Board of Directors", id: 'board-directors' },
    { label: "Vision & Mission", id: 'vision-mission' },
  ];

  // Handle click outside to close sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle ESC key press to close sidebar
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSidebarOpen(false);
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/* Sidebar - Responsive */}
        <aside
          className={`col-span-12 md:col-span-3 bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 ${
            isSidebarOpen
              ? 'block fixed inset-0 z-50 h-full overflow-y-auto'
              : 'hidden md:block'
          }`}
          ref={sidebarRef}
        >
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 text-mpgin-darkBlue"
          >
            <X size={24} />
          </button>
          <nav className="space-y-2 mt-6 md:mt-0">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 5 }}
                onClick={() => {
                  setActiveId(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 transition-all duration-200 font-bold text-lg md:text-base ${
                  activeId === item.id
                    ? 'bg-mpgin-darkBlue text-mpgin-blue underline'
                    : 'bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-mpgin-blue'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </aside>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden col-span-12 flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-mpgin-darkBlue"></h2>
          <button
            ref={menuButtonRef}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-mpgin-darkBlue focus:outline-none"
          >
            {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Main Content Area */}
        <main className="col-span-12 md:col-span-9 space-y-10">
          {/* Conditionally render content based on active tab */}
          {activeId === 'vision-mission' ? (
            <>
              <article className="space-y-6">
                <h2 className="text-3xl font-bold text-mpgin-darkBlue">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be one of the leading Institutions for Engineering education, developing proficient Engineers with global acceptance in the service of mankind.
                </p>
              </article>

              <article className="space-y-6">
                <h2 className="text-3xl font-bold text-mpgin-darkBlue">Our Mission</h2>
                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                  <li>
                    Providing quality Engineering education to cater to the needs of industry and society with a multidisciplinary approach on a sustainable basis.
                  </li>
                  <li>
                    Developing globally competent Engineers having the ability to solve real-life problems, addressing environmental issues through technological innovation.
                  </li>
                </ul>
              </article>
            </>
          ) : activeId === 'board-directors' ? (
            // Display Board of Directors
            <div className="mt-6">
              <h2 className="text-3xl font-bold text-mpgin-darkBlue">Board of Directors</h2>
              <div className="mt-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2 bg-gray-200 text-left">Sr. No.</th>
                      <th className="border border-gray-300 p-2 bg-gray-200 text-left">Name Of The Board Of Director</th>
                      <th className="border border-gray-300 p-2 bg-gray-200 text-left">Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">1.</td>
                      <td className="border border-gray-300 p-2">Sow. Jayshree Kamaji Pawar</td>
                      <td className="border border-gray-300 p-2">President</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">2.</td>
                      <td className="border border-gray-300 p-2">Sow. Alka Rajeshwar Satelikar</td>
                      <td className="border border-gray-300 p-2">Vice President</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">3.</td>
                      <td className="border border-gray-300 p-2">Shri. Venkatchari Bramahachari Verglum</td>
                      <td className="border border-gray-300 p-2">Secretary</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">4.</td>
                      <td className="border border-gray-300 p-2">Shri. Vimal Hanmantrao Sirsat</td>
                      <td className="border border-gray-300 p-2">Joint Secretary</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">5.</td>
                      <td className="border border-gray-300 p-2">Shri. Arvind Shankarrao Patil</td>
                      <td className="border border-gray-300 p-2">Member</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">6.</td>
                      <td className="border border-gray-300 p-2">Shri. Kamaji Gangadhharao Pawar</td>
                      <td className="border border-gray-300 p-2">Member</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">7.</td>
                      <td className="border border-gray-300 p-2">Smt. Sunita Ganpatrao Tamalwald</td>
                      <td className="border border-gray-300 p-2">Member</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">8.</td>
                      <td className="border border-gray-300 p-2">Shri. Ankush Damodarrao More</td>
                      <td className="border border-gray-300 p-2">Member</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">9.</td>
                      <td className="border border-gray-300 p-2">Sow. Manisha Devidas Pawar</td>
                      <td className="border border-gray-300 p-2">Member</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">10.</td>
                      <td className="border border-gray-300 p-2">Sow. Girjabai Gangadhharao Pawar</td>
                      <td className="border border-gray-300 p-2">Member</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">11.</td>
                      <td className="border border-gray-300 p-2">Kum. Shraddha Kamaji Pawar</td>
                      <td className="border border-gray-300 p-2">Member</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">12.</td>
                      <td className="border border-gray-300 p-2">Shri. Sadanand Arvind Patil</td>
                      <td className="border border-gray-300 p-2">Member</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">13.</td>
                      <td className="border border-gray-300 p-2">Shri. Omprasad Venkatchari Vrenglam</td>
                      <td className="border border-gray-300 p-2">Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            // Display Profile Page for other active IDs
            <div className="mt-6">
              <ProfilePage id={activeId} />
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default QuickLinksPanel;