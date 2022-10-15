import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [historyButtonEffect, setHistoryButtonEffect] = useState(false);
  const [createButtonEffect, setCreateButtonEffect] = useState(false);
  const [chatButtonEffect, setChatButtonEffect] = useState(false);
  const [loginButtonEffect, setLoginButtonEffect] = useState(false);

  const [createEntryState, setCreateEntryState] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-gray-900 p-3 border border-slate-500">
        <Link href="/">
          <a className="inline-flex items-center p-2 gap-4">
            <span className="text-xl text-white font-bold uppercase tracking-wide ">
              Blind Market
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-slate-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        ></button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start gap-2 flex flex-col lg:h-auto">
            <Link href="/write">
              <button
                className={`${
                  createButtonEffect && "animate-wiggle"
                } bg-gray-900 p-3 text-white rounded hover:bg-black hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
                onClick={() => {
                  setCreateButtonEffect(true);
                  setCreateEntryState(true);
                }}
                onAnimationEnd={() => setCreateButtonEffect(false)}
              >
                Create Entry
              </button>
            </Link>
            <Link href="/history">
              <button
                className={`${
                  historyButtonEffect && "animate-wiggle"
                } bg-gray-900 p-3 text-white rounded hover:bg-black hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
                onClick={() => {
                  setHistoryButtonEffect(true);
                }}
                onAnimationEnd={() => setHistoryButtonEffect(false)}
              >
                History
              </button>
            </Link>
            <Link href="/chat">
              <button
                className={`${
                  chatButtonEffect && "animate-wiggle"
                } bg-gray-900 p-3 text-white rounded hover:bg-black hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
                onClick={() => {
                  setChatButtonEffect(true);
                }}
                onAnimationEnd={() => setChatButtonEffect(false)}
              >
                Chats
              </button>
            </Link>
            <button
              onClick={() => {
                setLoginButtonEffect(true);
                alert("Hello!");
              }}
              onAnimationEnd={() => setLoginButtonEffect(false)}
              className={`${
                loginButtonEffect && "animate-wiggle"
              } bg-gray-900 p-3 text-white rounded hover:bg-black hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
