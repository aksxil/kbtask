"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import localFont from "next/font/local";
import CenterGrid from "./components/CenterGrid";
import {Color,Framework,Iconography,Imagery,Logo,Motion,Typography,VoiceAndTone,} from "./components/Logos";

const secondary = localFont({
  src: "./../app/fonts/6.woff2",
});

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap.set(".line", { scaleY: 0 });
    gsap.set(".line-2", { scaleX: 0 });

    gsap.set(".center-box", { scale: 7.5, backgroundColor: "white" });
    gsap.set(".text-2", { opacity: 0 });
    gsap.set(".third", { transform: "translateX(800px)" });
    gsap.set(".fifth", { translateX: "-800px" });
    gsap.set(".eighth", { translateX: "-720px", translateY: "360px" });
    gsap.set(".ninth", { translateY: "400px", translateX: "100px" });
    gsap.set(".first", { translateX: "-720px", translateY: "-360px" });
    gsap.set(".seventh", { translateX: "720px", translateY: "360px" });
    gsap.set(".fourth ", { translateX: "720px", translateY: "-360px" });
    gsap.set(".second", { translateY: "-400px", translateX: "-100px" });

    gsap.to(".logo-container", {
      width: "15%",
      height: "15%",
      duration: 1,
      delay: 2,
      ease: "power3.inOut",
    });

    gsap.fromTo(
      ".text-1",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1, delay: 2, ease: "power3.inOut" }
    );
    gsap.fromTo(
      ".line-1",
      {
        scaleY: 0,
      },
      { scaleY: 1, duration: 4, ease: "power3.inOut" }
    );
    gsap.fromTo(
      ".line-2",
      {
        scaleX: 0,
      },
      { scaleX: 1, duration: 4, ease: "power3.inOut" }
    );
    gsap.to(".line-1", {
      opacity: 0.5,
      duration: 1,
      delay: 2,
      ease: "power3.inOut",
    });
    gsap.to(".line-2", {
      opacity: 0.5,
      duration: 1,
      delay: 2,
      ease: "power3.inOut",
    });

    timeline
      .to(
        ".text-2",
        {
          opacity: 1,
          duration: 0.6,
          delay: 0.6,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        ".center-box",
        {
          scale: 5,
          duration: 0.5,
          backgroundColor: "#0061fe",
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        ".white-logo",
        {
          opacity: 1,
          duration: 0.5,
          ease: "power3.inOut",
        },
        "<"
      )

      .to(".third", {
        transform: "translateX(440px)",
        duration: 1,
        ease: "power3.inOut",
      })
      .to(
        ".fifth",
        {
          translateX: "-440px",
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(".eighth", {
        translateX: "-0px",
        translateY: "0px",
        duration: 1,
        ease: "power3.inOut",
      })
      .to(
        ".ninth",
        {
          translateY: "0px",
          translateX: "0px",
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        ".first",
        {
          translateX: "0px",
          translateY: "0px",
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        ".seventh",
        {
          translateX: "0px",
          translateY: "0px",
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        ".fifth",
        {
          translateX: "-0px",
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        ".fourth ",
        {
          translateX: "0px",
          translateY: "0px",
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        ".second",
        {
          translateY: "0px",
          translateX: "0px",
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )

      .to(
        ".third",
        {
          transform: "translateX(0px)",
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )

      .to(
        ".center-box",
        {
          scale: 1,
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        ".white-logo",
        {
          width: "100%",
          height: "100%",
          padding: "16px",
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        ".text-2",
        {
          opacity: 0,
          duration: 0.2,
          ease: "power3.inOut",
        },
        "<"
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative h-[250vh] ${secondary.className} `}
    >
      
      <div
        ref={gridRef}
        className="grid-container grid gap-2 grid-cols-[1fr_1fr_100px_1fr_1fr] grid-rows-[1fr_100px_1fr] w-full h-screen  sticky top-0 overflow-hidden object-center p-4 "
      >
        {/* Grid  */}
        <div className="border row-span-2 outer-left first bg-[#283750] z-10 relative flex justify-around items-start flex-col p-6 text-[#b4c8e1] hover:bg-[#1e1919] hover:text-[#f7f6f5] cursor-pointer transition-colors duration-300 ease-in-out rounded-tl-2xl">
          <h1 className="text-4xl">Framework</h1>
          <div className="w-full h-full flex justify-center items-center ">
            <Framework />
          </div>
        </div>
        <div className="border col-span-2 object-center bg-[#fad24b] second z-10 flex justify-around items-start flex-col p-6 text-[#684505] hover:bg-[#1e1919] hover:text-[#f7f6f5] cursor-pointer transition-colors duration-300 ease-in-out">
          <h1 className="text-4xl">Voice & Tone</h1>
          <div className="w-full h-full flex justify-center items-center">
            <VoiceAndTone />
          </div>
        </div>
        <div className="bg-[#14c8eb] row-span-2 outer-right object-center third z-10 flex justify-around items-start flex-col p-6 text-[#055463] hover:bg-[#1e1919] hover:text-[#f7f6f5] cursor-pointer transition-colors duration-300 ease-in-out">
          <h1 className="text-4xl">Logo</h1>
          <div className="w-full h-full flex justify-center items-center">
            <Logo />
          </div>
        </div>
        <div className="border fourth bg-[#fa551e] flex justify-around items-start flex-col p-6 text-[#6d2e09] hover:bg-[#1e1919] hover:text-[#f7f6f5] cursor-pointer transition-colors duration-300 ease-in-out rounded-tr-2xl">
          <h1 className="text-4xl">Typography</h1>
          <div className="w-full h-full flex justify-center items-center">
            <Typography />
          </div>
        </div>
        <div className="bg-[#f9a34b] row-span-2  object-center fifth relative z-10 flex justify-around items-start flex-col p-6 text-[#6d2e09] hover:bg-[#1e1919] hover:text-[#f7f6f5] cursor-pointer transition-colors duration-300 ease-in-out">
          <h1 className="text-4xl">Color</h1>
          <div className="w-full h-full flex justify-center items-center">
            <Color />
          </div>
        </div>

        <CenterGrid />

        <div className="border row-span-2 outer-left seventh bg-[#c8aff0] z-10 flex justify-around items-start flex-col p-6 text-[#682760] hover:bg-[#1e1919] hover:text-[#f7f6f5] cursor-pointer transition-colors duration-300 ease-in-out rounded-br-2xl">
          <h1 className="text-4xl">Motion</h1>
          <div className="w-full h-full flex justify-center items-center ">
            <Motion />
          </div>
        </div>
        <div className="border eighth bg-[#b4dc19] z-10 flex justify-around items-start flex-col p-6 text-[#055463] hover:bg-[#1e1919] hover:text-[#f7f6f5] cursor-pointer transition-colors duration-300 ease-in-out rounded-bl-2xl">
          <h1 className="text-4xl">Iconography</h1>
          <div className="w-full h-full flex justify-center items-center">
            <Iconography />
          </div>
        </div>
        <div className="border col-span-2 bg-[#892055] ninth z-10 flex justify-around items-start flex-col p-6 text-[#ffafa5] hover:bg-[#1e1919] hover:text-[#f7f6f5] cursor-pointer transition-colors duration-300 ease-in-out">
          <h1 className="text-4xl">Imagery</h1>
          <div className="w-full h-full flex justify-center items-center">
            <Imagery />
          </div>
        </div>
      </div>
    </div>
  );
}
