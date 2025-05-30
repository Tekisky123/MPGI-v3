import Departments from "../components/Departments";
import Hero from "../components/Hero";
import QuickLinksPanel from "../components/QuickLinksPanel";

const Home = () => {
  return (
    <main className="bg-gray-50">
      <Hero />
      <Departments />
      <QuickLinksPanel />
      {/* <NotificationComponent /> */}
    </main>
  );
};

export default Home;
