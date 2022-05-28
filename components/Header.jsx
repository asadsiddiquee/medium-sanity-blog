import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex-col sm:flex-row flex justify-between max-w-7xl mx-auto px-4 py-4 ">
      <div className="flex justify-between items-center space-x-10 mx-auto sm:mx-0">
        <h3 className="text-5xl font-inter">
          <Link href="/">Medium</Link>
        </h3>
        <div className="hidden md:flex space-x-4 text-xl items-center">
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">
            <a className="px-4 py-2 bg-green-600 text-white rounded-full">
              Follow
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row space-x-4  justify-center items-center text-xl space-y-2 sm:space-y-0">
        <Link href="#">Sign In</Link>
        <h3 className="rounded-full border-green-700 border text-green-700 px-4 py-2 ">
          <Link href="#">Get Started</Link>
        </h3>
      </div>
    </header>
  );
};

export default Header;
