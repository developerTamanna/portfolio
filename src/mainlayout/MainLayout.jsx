import TopNavbar from "../components/TopNavbar";
import SideNavbar from "../components/SideNavbar";
import ParticlesBackground from "../components/ParticlesBackground";
import { Outlet, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [loading ,setloading] = useState(true);
  const location = useLocation();
  useEffect(() => {
     setloading(true);
     window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="hero relative h-full">
      <TopNavbar />
      <SideNavbar />
      <ParticlesBackground />
      <div className=" pb-25 w-full h-full">
        {loading ? <Loader onComplete={() => setloading(false)} /> : <Outlet />}
      </div>
    </div>
  )
}

export default MainLayout
