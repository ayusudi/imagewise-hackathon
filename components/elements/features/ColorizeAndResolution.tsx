"use client"
import { useEffect, useRef, useState } from "react";
import Swall from "@elements/Swall"

interface State {
  img: string;
  title: string;
  text: string;
}

const page = ({ feature, push, status }: { feature: string, push: Function, status: boolean }) => {

  const formRef = useRef<HTMLFormElement>(null);
  const [imgButton, setImgButton] = useState("/circle.png")
  const [strImg, setStrImg] = useState("")
  const [loading, setLoading] = useState(false)
  const state: Record<string, State> = {
    "fix-resolution": { img: "/icons/magic.png", title: "Fix Resolution", text: "AI will fix the image to the great resolution we can do." },
    colorize: { img: "/icons/colorize.png", title: "Colorize Monochrome", text: "Upload monochrome image then our AI set the color." },
  };
  const { title, img, text } = state[feature];

  useEffect(() => {
    if (loading) {
      setImgButton("/circle.gif")
    } else {
      setImgButton("/circle.png")
    }
  }, [loading])

  const postImage = async () => {
    if (!status) {
      Swall()
      return;
    } else {
      const form = formRef.current
      if (!form) {
        console.error('Form not found.');
        return;
      }
      if (strImg) {
        setLoading(true)
        const response = await fetch('/api/features/' + feature, {
          method: 'POST',
          headers: {
            url: strImg
          }
        });
        if (response.ok) {
          let data = await response.json()
          setLoading(false)
          push(data.redirect)
        }
      } else {
        setLoading(true)
        const response = await fetch('/api/features/' + feature, {
          method: 'POST',
          body: new FormData(form)
        });
        if (response.ok) {
          let data = await response.json()
          setLoading(false)
          push(data.redirect)
        }
      }
    }
  }

  return (
    <form method="POST" ref={formRef} onSubmit={(event) => {
      event.preventDefault();
      postImage();
    }} encType='multipart/form-data' action={"/api/features/" + feature} className="py-2 flex flex-col justify-around items-center bg-gradfeatureblue bg-shrink bg-no-repeat text-white rounded-xl min-h-400 w-64 md:w-full h-full">
      <img src={img} alt={feature} width={45} height={45} style={{ objectFit: "contain" }} />
      <h1 className="font-pro text-xl md:text-3xl font-bold">{title}</h1>
      <p className="text-center">{text}</p>
      <div className="flex flex-col gap-2 w-full items-center">
        <div className="w-3/4 bg-gray-200 p-1 flex items-between">
          <input type="file" accept="image/*" name="file" id="imageInput" className="flex-1 text-black" />
        </div>
        <p className="text-bolder text-pro">Or</p>
        <input name="image" placeholder="Copy-paste url image here.." type="text" onChange={(e) => setStrImg(e.target.value)} className="w-3/4 py-1 pl-2 text-black bg-white rounded" />
      </div>
      <button type="submit" className="h-9 w-24 bg-white rounded-3xl items-center justify-around flex flex-row">
        <p className="text-pro text-black text-sm">Submit</p>
        <img src={imgButton} alt="" height={30} width={30} style={{ objectFit: "contain" }} />
      </button>
    </form>
  )
}

export default page