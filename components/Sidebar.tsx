import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

function Sidebar({ isOpen }: any) {
  const router = useRouter();
  const menuItems = [
    {
      href: "/",
      title: "Chat1",
    },
    {
      href: "/chat",
      title: "Chat2",
    },
    {
      href: "/settings",
      title: "Chat3",
    },
    {
      href: "/history",
      title: "Chat4",
    },
  ];

  return (
    <>
      <nav>
        <ul>
          {menuItems.map(({ href, title }) => (
            <li className="m-2" key={title}>
              <Link
                href={href}
                className="text-center items-center align-middle justify-center"
              >
                <a
                  className={`flex p-2 bg-blue-500 rounded hover:bg-slate-400 cursor-pointer text-white border border-gray-700 font-bold text-lg  text-center items-center align-middle justify-center`}
                >
                  {`${title}`}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
