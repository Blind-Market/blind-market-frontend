import Link from "next/link";
import React, { useState } from "react";

const NavButton = ({ btnText, btnHref }: any) => {
  const [buttonEffect, setButtonEffect] = useState(false);
  return (
    <Link href={btnHref}>
      <button
        className={`${
          buttonEffect && "animate-wiggle"
        } bg-blue-600 p-3 text-white rounded hover:bg-blue-800 hover:shadow-xl lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center`}
        onClick={() => {
          setButtonEffect(true);
        }}
        onAnimationEnd={() => setButtonEffect(false)}
      >
        <p className="uppercase">{btnText}</p>
      </button>
    </Link>
  );
};

export default NavButton;
