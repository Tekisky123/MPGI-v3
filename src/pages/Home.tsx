import Departments from "../components/Departments";
import Hero from "../components/Hero";
import NotificationPopup from "../components/NotificationPopup";
import QuickLinksPanel from "../components/QuickLinksPanel";

const Home = () => {
  return (
    <main className="bg-gray-50">
      <Hero />
      <Departments />
      <QuickLinksPanel />
      {/* <NotificationComponent /> */}
       <NotificationPopup />
    </main>
  );
};

export default Home;
