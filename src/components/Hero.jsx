import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <img
          src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
          alt="..."
          className="w-20"
        />
      </div>
      <span className="text-5xl font-bold mt-4">The browser</span>
      <span className="text-5xl font-bold">built to be yours</span>
      <span className="mt-3 text-lg">
        Need the Chrome Installer?
        <span className="text-blue-600"> Download here</span>
        <span>.</span>
      </span>
      <span className="text-4xl font-bold mt-4">
        Discover the latest{" "}
        <span className="rounded-full font-semibold bg-blue-200 p-2 text-blue-700 bouncy">
          updates
        </span>{" "}
        from Chrome
      </span>
    </div>
  );
};

export default Hero;
