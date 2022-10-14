import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children, Menu }: any) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col md:flex-row flex-1">
          <aside className="bg-fuchsia-100 w-full md:w-60">
            <Sidebar />
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}
