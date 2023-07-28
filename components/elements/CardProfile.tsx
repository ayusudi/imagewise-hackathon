"use client"

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react"

const CardProfile = () => {
  const { data: session } = useSession();
  const [infoUser, setInfoUser] = useState({
    hint: 0,
    credit: 0
  })
  useEffect(() => {
    fetch('/api/user')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data => {
        setInfoUser(data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="mt-16 lg:mt-0 w-64 md:h-52 md:w-5/6 relative bg-gradientapp flex justify-content-center flex-col lg:w-96 sm:h-60 lg:h-60 bg-shrink bg-no-repeat text-white text-sm rounded-2xl rounded-x p-5">
      <img
        style={{
          top: "-100px",
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          border: "8px solid #5A9BD7",
          width: 200,
        }}
        className="rounded-full m-auto aspect-square object-contain flex justify-center" src={session?.user.image || ''} alt="" />
      <div style={{ display: "flex", gap: 8, flexDirection: "column", paddingTop: 95 }}>
        <p className="text-base text-center">{session?.user.name || ''}</p>
        <div className="flex w-full justify-between">
          <p className="text-base">{session?.user.userName || ''}</p>
          <p>{infoUser.hint} / {infoUser.credit} Credits</p>
        </div>
        <a className="w-full m-auto" href="https://wa.me/6281294638809/?text=Hello%20imagewise%20developer,%20my%20email%20is%20....%20and%20I%20would%20like%20to%20ask%20for%20credit%20because%20...">
          <button className="w-full bg-bluee text-white text-sm rounded-3xl py-3 px-2 mt-1 tracking-wider text-white">Request free credits</button>
        </a>
      </div>
    </div >
  );
};

export default CardProfile;