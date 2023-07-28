"use client"
import CardNavigate from "@elements/CardNavigate";
import Footer from "@elements/Footer";
import React from "react";
import CardProfile from "@elements/CardProfile";


const features = [
  { feature: "Webp Converter", text: "Unlimited attempt to try webp converter. ", url: "/features/webp-converter" },
  { feature: "Colorize Monochrome", text: "Monochrome image to the colorful image.", url: "/features/colorize" },
  { feature: "Fix Resolution", text: "Set image to the great resolution we can do.", url: "/features/fix-resolution" },
  { feature: "Prompt to Image", text: "Give our AI some sentance to generate image.", url: "/features/prompt-to-image" },
]
const page = () => {
  return (
    <main className="pt-20 text-white bg-page flex h-min-screen md:h-screen w-screen flex-col">
      <div className="lg:w-875 w-11/12 max-w-1260 lg:h-400 flex lg:flex-col flex-col-reverse m-auto items-center  md:items-center lg:flex-wrap content-between justify-between gap-4 lg:gap-0 lg:py-0 py-10" >
        <div className="lg:w-2/3 md:w-5/6 flex-col md:flex-row flex h-full lg:pr-4 md:flex-wrap content-between justify-between gap-4 md:gap-0 lg:gap-4">
          {
            features.map((el, i) => <CardNavigate key={i} feature={el.feature} text={el.text} bg={null} url={el.url} />)
          }
        </div>
        <div className="lg:order-6 md:w-full lg:w-auto md:flex md:justify-center" >
          <CardNavigate feature="Your Collection" text={null} bg={null} url={null} />
        </div >
        <CardProfile />
      </div>
      <Footer />
    </main >
  );
};

export default page;
