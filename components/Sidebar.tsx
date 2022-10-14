import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

function Sidebar({ toggleSidebar, isMounted }: any) {
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
              <Link href={href}>
                <a
                  className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer`}
                >
                  {title}
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
