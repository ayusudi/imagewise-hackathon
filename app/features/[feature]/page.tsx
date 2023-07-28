"use client"
import React, { useEffect, useState } from "react";
import CardNavigate from "@elements/CardNavigate";
import CardProfile from "@elements/CardProfile";
import WebConverter from "@elements/features/WebConverter"
import PromptToImage from "@elements/features/PromptToImage"
import ColorizeAndResolution from "@elements/features/ColorizeAndResolution"
import Footer from "@elements/Footer";
import { useRouter } from 'next/navigation';

interface PageProps {
  params: {
    feature: string;
  };
}


function PageFeature({ feature }: { feature: string }) {
  const [userStatus, setUserStatus] = useState(true)
  const router = useRouter()
  useEffect(() => {
    fetch('/api/user')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data => {
        if (data.hint >= data.credit) {
          setUserStatus(false)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  if (feature == "webp-converter") return <WebConverter />
  else if (feature == "prompt-to-image") return <PromptToImage status={userStatus} />
  else return <ColorizeAndResolution feature={feature} push={router.push} status={userStatus} />
}


const Page: React.FC<PageProps> = ({ params: { feature } }) => {
  const paths: string[] = ["fix-resolution", "colorize", "prompt-to-image", "webp-converter", "result"];
  if (paths.includes(feature)) {
    return (
      <main className="pt-20 text-white bg-page flex h-min-screen md:h-screen w-screen flex-col">
        <div className="lg:w-875 w-11/12 max-w-1260 lg:h-400 flex lg:flex-col flex-col-reverse m-auto items-center  md:items-center lg:flex-wrap content-between justify-between gap-4 lg:gap-0 lg:py-0 py-10">
          <div className="lg:w-2/3 md:w-5/6 flex-col md:flex-row flex h-full lg:pr-4 md:flex-wrap content-between justify-between gap-4 md:gap-0 lg:gap-4">
            <div className="dashbox flex rounded-xl  w-full h-full">
              <PageFeature feature={feature} />
            </div>
          </div>
          <div className="lg:order-6 md:w-full lg:w-auto md:flex md:justify-center">
            <CardNavigate feature="Your Collection" text={null} bg={null} url={null} />
          </div>
          <CardProfile />
        </div>
        <Footer />
      </main>
    );
  }
  return (
    <main>
      <h1>Feature not found</h1>
    </main>
  );
};

export default Page;
