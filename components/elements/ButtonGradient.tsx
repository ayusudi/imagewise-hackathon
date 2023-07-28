import React from "react";

const ButtonGradient = ({ text }: { text: string }) => {
  if (text == "Sign In") {
    return (
      <button className="bg-gradientapp bg-shrink bg-no-repeat text-white text-sm rounded-2xl py-3 w-100 tracking-wider">{text}</button>
    );
  } else {
    return (
      <button className="bg-gradientapp bg-shrink bg-no-repeat text-white text-sm rounded-3xl py-4 px-5 tracking-wider">{text}</button>
    );
  }

};

export default ButtonGradient;