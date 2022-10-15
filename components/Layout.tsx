import { useState } from "react";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children, Menu }: any) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col md:flex-row flex-1">
          <aside className="bg-black w-full md:w-60 sticky">
            <Sidebar isOpen={isOpen} />
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}
