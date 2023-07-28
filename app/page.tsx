"use client";
import React from "react";
import Footer from "@elements/Footer"
import DemoFeature from "@elements/DemoFeature";
import BannerLanding from "@elements/BannerLanding";

export default function HomePage() {
  return (
    <main className="bg-page flex min-h-screen w-screen flex-col">
      <BannerLanding />
      <hr className="bg-white border-2" />
      <DemoFeature />
      <Footer />
    </main >
  )
}

