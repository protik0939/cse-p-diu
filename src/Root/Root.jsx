import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Menus from "../Components/Menus/Menus";
import TopBarProgress from "react-topbar-progress-indicator";

// Configuration for the top progress bar
TopBarProgress.config({
  barColors: {
    "0": "#49b863",  // Starting color (blue)
    "1.0": "#166fb8" // Ending color (purple)
  },
  shadowBlur: 10,  // Adds a shadow to the progress bar
  barThickness: 2, // Thickness of the progress bar
});

const Root = () => {
  const [progress, setProgress] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show progress bar on route change start
    setProgress(true);

    // Hide progress bar after some time or route load complete
    const timer = setTimeout(() => {
      setProgress(false);
    }, 500); // Simulated loading delay (adjust this as necessary)

    return () => clearTimeout(timer); // Clean up the timer
  }, [location]); // Trigger when location changes

  return (
    <div>
      {/* Show progress bar while route changes */}
      {progress && <TopBarProgress />}
      
      <Navbar />
      <Menus />
      <Outlet />
    </div>
  );
};

export default Root;
