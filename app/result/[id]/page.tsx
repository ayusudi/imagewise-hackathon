"use client"

import CardNavigate from "@elements/CardNavigate";
import Footer from "@elements/Footer";
import React, { useEffect, useState } from "react";
import CardProfile from "@elements/CardProfile";

interface PageProps {
  params: {
    id: string;
  };
}


const Page: React.FC<PageProps> = ({ params: { id } }) => {
  const [result, setResult] = useState("")
  useEffect(() => {
    fetch('/api/images/' + id)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data => {
        setResult(data.image)
      })
      .catch(err => {
        console.log(err);

      })

  }, [])
  return (
    <main className="pt-20 text-white bg-page flex h-min-screen md:h-screen w-screen flex-col">
      <div className="lg:w-875 w-11/12 max-w-1260 lg:h-400 flex lg:flex-col flex-col-reverse m-auto items-center  md:items-center lg:flex-wrap content-between justify-between gap-4 lg:gap-0 lg:py-0 py-10" >
        <div className="lg:w-2/3 md:w-5/6 flex-col md:flex-row flex h-full lg:pr-4 md:flex-wrap content-between justify-between gap-4 md:gap-0 lg:gap-4">
          <div className="dashbox flex rounded-xl  w-full h-full">
            <div className="py-2 flex flex-col justify-around items-center bg-gradfeatureblue bg-shrink bg-no-repeat text-white rounded-xl min-h-400 w-64 md:w-full h-full">
              <h1 className="pt-2 font-pro text-xl md:text-3xl font-bold">Here is your result</h1>
              {
                result ?
                  <img src={result} style={{ height: 240, objectFit: "contain" }} /> :
                  <></>
              }
              <p className="text-center">Thank you for trying our prototype.</p>
              <div className="flex flex-col gap-2 w-full items-center mb-3">
              </div>
            </div>
          </div>
        </div>
        <div className="lg:order-6 md:w-full lg:w-auto md:flex md:justify-center" >
          <CardNavigate feature="Your Collection" text={null} bg={null} url={null} />
        </div >
        <CardProfile />
      </div>
      <Footer />
    </main >
  )
};

export default Page;
