import React from "react";
import ButtonGradient from "./ButtonGradient";
import { signIn, useSession } from "next-auth/react"
import Link from "next/link";

const BannerLanding = () => {
  const { data: session } = useSession()
  return (
    <section className="mt-20 lg:mt-0 bg-grablue px-6 lg:px-16 flex flex-col-reverse lg:flex-row min-h-screen lg:h-screen items-center">
      <div className="flex-1 text-white flex flex-col lg:gap-10 gap-5 ">
        {/* eslint-disable jsx-a11y/alt-text */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="textMotto.png" className="object-cover h-auto w-100 lg:h-18 lg:mr-3 mt-3" alt="IMAGEWISE" />
        <div className="flex flex-col gap-4">
          <p className="text-sm tracking-wider">AI-powered website enhances user-uploaded images, offering premium options like image generation from prompts, resolution fixing, and monochrome to colorization. It also provides a free image converter to the WebP format, optimized for web usage. This allows users to easily transform their images for faster loading and efficient online display.</p>
          <div>
            {

              session ?
                <Link href="/features" >
                  <ButtonGradient text="Let's explore our features!" />
                </Link>
                : <a
                  href={`/api/auth/signin`}
                  className="text-white hidden lg:flex"
                  onClick={(e) => {
                    e.preventDefault()
                    signIn("google")
                  }}
                >
                  <ButtonGradient text="Create an Account" />
                </a>
            }
          </div>
        </div>
        <div>
          <p className="text-base font-bold my-3 lg:my-0" >Powered to finish this project for </p>
          {/* eslint-disable jsx-a11y/alt-text */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="devpost.svg" className="object-cover h-auto w-2/6 h-12 relative lg:mb-4 mb-2 " alt="IMAGEWISE" />
          {/* eslint-disable jsx-a11y/alt-text */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="hackathon2.png" className="object-cover h-auto w-3/6 h-12 relative lg:mb-4 mb-2 " alt="IMAGEWISE-2" />

          {/* eslint-disable jsx-a11y/alt-text */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="hackthon.png" className="object-cover h-auto w-5/6 h-12 relative lg:mb-0 mb-14 " alt="IMAGEWISE-1" />

        </div>
      </div>
      <div className="flex-1 flex lg:justify-end justify-center ">
        {/* eslint-disable jsx-a11y/alt-text */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="otter.png" className="object-cover aspect-square w-5/6 h-auto" alt="IMAGEWISE" />
      </div>
    </section>
  );
};

export default BannerLanding;