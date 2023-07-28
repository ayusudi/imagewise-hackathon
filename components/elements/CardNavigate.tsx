import React from "react";
import ButtonArrow from "./ButtonArrow";
import Link from "next/link";

const CardFeatureNavigate = ({ feature, text, bg, url }: { feature: string | null, text: string | null, bg: string | null, url: string | null }) => {
  if (!bg) bg = "bg-gcardfeature flex gap-3"
  if (feature == "Your Collection") {
    return (
      <div className="w-64 bg-gradientapp bg-shrink bg-no-repeat lg:w-96 flex-col md:flex-row md:w-5/6 rounded-xl justify-center md:justify-between md:items-center items-start flex px-4" style={{ height: 98, gap: 6 }}>
        <h1 className="font-pro text-xl">Your Collection</h1>
        <Link href="/collections" className="flex text-blue-navy font-bold bg-white text-sm rounded-3xl p-0.5 font-pro w-36 justify-center items-center gap-1">
          <p>Check now &nbsp;</p>
          <img src="/icons/arrow.png" className="object-contain aspect-square h-10 w-auto" alt="" />
        </Link>
      </div>
    )
  }
  return (
    <div className={bg + " w-64 md:w-72 p-5 lg:w-96 flex-col rounded-xl"}>
      <h1 className="font-pro text-2xl">{feature}</h1>
      {
        text ? <p className="text-base">{text}</p> : <></>
      }
      <Link href={url || '/'}>
        <ButtonArrow disable={false} />
      </Link>
    </div>
  );
};

export default CardFeatureNavigate;