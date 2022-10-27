import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";

const Layout = React.memo(function Layout({ children, Menu }: any) {
  const [isOpen, setIsOpen] = useState(true);
  const [windowSize, setWindowSize] = useState<any>(0);

  useEffect(() => {
    function getWindowSize() {
      const { innerWidth, innerHeight } = window;
      return innerWidth;
    }
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {windowSize > 1024 ? <Navbar /> : <SubNavbar />}
        <div className="flex flex-col md:flex-row flex-1">
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
});

export default Layout;
