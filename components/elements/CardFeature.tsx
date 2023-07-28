import React from "react";

const CardFeature = ({ img, feature, text }: { img: string, feature: string, text: string }) => {
  return (
    <div className="bg-gracard px-0 justify-around lg:p-6 w-56 h-24 lg:w-64 lg:h-28 flex flex-wrap bg-white rounded-lg shadow lg:justify-between items-center">
      <img src={img} className="w-10 aspect-square object-cover" alt="" />
      <div className="text-white w-40">
        <h3 className="font-pro font-bold text-sm">{feature}</h3>
        <p className="text-xs">{text}</p>
      </div>
    </div>
  );
};

export default CardFeature;