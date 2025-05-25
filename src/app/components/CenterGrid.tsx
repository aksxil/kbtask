"use client";

import React from "react";
import AnimatedPolygonLogo from "./Polygon";
import Image from "next/image";

export default function MainCenterGrid() {
  return (
    <div className="relative bg-[#0061fe] center-box">
      {/* Vertical lines */}
      <div className="absolute -top-[200vh] left-0 h-[400vh] w-[0.2px] bg-[#0061fe] scale-[0.5] -z-10 line-1"></div>
      <div className="absolute -top-[200vh] right-0 h-[400vh] w-[0.3px] bg-[#0061fe] scale-[0.5] -z-10 line-1"></div>
      <div className="absolute top-0 left-[-200vw] h-[0.3px] w-[400vw] bg-[#0061fe] scale-[0.5] -z-10 line-2"></div>
      <div className="absolute bottom-0 right-[-200vw] h-[0.3px] w-[400vw] bg-[#0061fe] scale-[0.5] -z-10 line-2"></div>

      {/* Content */}
      <div className="relative w-full h-full p-1 text-white text-[6px] leading-tight">
        {/* Animated logo in center */}
        <div className="absolute bottom-0 left-0 z-10 w-full h-full flex justify-center items-center logo-container">
          <AnimatedPolygonLogo />
        </div>

        {/* White logo bottom left */}
        <div className="absolute bottom-0 left-0 z-10 w-[15%] h-[15%] flex justify-center items-center opacity-0 white-logo">
          <Image
            src="/logo.svg"
            alt="logo"
            width={150}
            height={150}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top left text */}
        <h1 className="absolute top-0 left-0 p-1 text-[#0061fe] text-[5px] w-2/3 text-1">
          At Dropbox, our Brand Guidelines help us infuse everything we make
          with identity.
        </h1>
        <h1 className="absolute top-0 left-0 p-1 text-2">
          From icons to illustration, logos to language, this collection is the
          foundation for how Dropbox looks, feels, and sounds like Dropbox.
        </h1>
      </div>
    </div>
  );
}
