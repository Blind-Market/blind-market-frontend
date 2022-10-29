import React, { useEffect, useState } from "react";
import { useAccount } from "../lib/web3";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";

function IsEqual(prevProps: any, nextProps: any) {
  return prevProps == nextProps ? true : false;
}

const Layout = React.memo(function Layout({ children, Menu }: any) {
  const [isOpen, setIsOpen] = useState(true);
  const [windowSize, setWindowSize] = useState<any>(0);
  const account = useAccount();

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
        {windowSize > 1024 ? <Navbar account={account} /> : <SubNavbar />}
        <div className="flex flex-col md:flex-row flex-1">
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}, IsEqual);

export default Layout;
