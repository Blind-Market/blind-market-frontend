import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

function Header({ toggleSidebar, isMounted }: any) {
  const router = useRouter();
  const menuItems = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/chat",
      title: "Chat",
    },
    {
      href: "/settings",
      title: "Settings",
    },
    {
      href: "/history",
      title: "History",
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

export default Header;
