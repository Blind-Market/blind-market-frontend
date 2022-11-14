import Link from "next/link";
import React, { useState } from "react";

function IsEqual(prevProps: any, nextProps: any) {
  return prevProps == nextProps ? true : false;
}

const NavButton = React.memo(function NavButton({ btnText, btnHref }: any) {
  return (
    <Link href={btnHref}>
      <button className="p-3 text-white rounded hover:bg-blue-800 hover:shadow-xl lg:inline-flex lg:w-auto w-full h-full font-bold items-center justify-center uppercase curser-pointer">{btnText}</button>
    </Link>
  );
}, IsEqual);

export default NavButton;
