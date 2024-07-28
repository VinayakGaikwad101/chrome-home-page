import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 w-full shadow-md flex items-center p-2 bg-white">
      <img
        className="w-10 mr-2"
        src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
        alt="..."
      />
      <span className="font-serif text-slate-600 font-bold text-xl">
        Chrome
      </span>
    </header>
  );
};

export default Navbar;
