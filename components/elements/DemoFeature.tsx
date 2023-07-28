import React from "react";
import CardFeature from "./CardFeature";

const features = [
  { img: "icons/webp.png", feature: "Webp Converter", text: "Unlimited attempt to try our webp converter feature. " },
  { img: "icons/colorize.png", feature: "Colorize Monochrome", text: "Upload monochrome image then our AI set the color." },
  { img: "icons/magic.png", feature: "Fix Resolution", text: "AI will fix the image to the great resolution we can do." },
  { img: "icons/generate.png", feature: "Prompt to Image", text: "Give our AI some sentance to generate image." }
]


const DemoFeature = () => {
  return (
    <section className="lg:pt-0 pt-20 lg:mt-0 bg-grapink flex flex-col lg:h-res h-min-screen justify-between ">
      <div className="lg:gap-0 gap-7 flex-1 flex-wrap px-0 lg:px-16  flex flex-col lg:flex-row items-center justify-between">
        <iframe id="demo" className="lg:w-auto w-5/6 flex-1 text-white flex aspect-video" src="https://www.youtube.com/embed/WaJYnZ3hHaE?modestbranding=1&showinfo=0" title="YouTube video player" ></iframe>
        <div className="flex-1 lg:flex-0  grow flex flex-col lg:items-end items-center">
          <div id="features" className="lg:my-0 lg:w-10/12 w-screen lg:gap-7 gap-5 flex flex-wrap flex-col justify-center items-center">
            <img src="textFeature.png" className="lg:h-auto h-7 object-cover" alt="IMAGEWISE" />
            <div className="flex-wrap sm:justify-center lg:w-auto w-4/6  flex-col md:flex-row flex lg:gap-7 gap-5">
              {
                features.map((el, i) => <CardFeature key={i} img={el.img} feature={el.feature} text={el.text} />)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoFeature;