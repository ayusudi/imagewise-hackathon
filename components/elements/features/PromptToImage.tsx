import Swall from "@elements/Swall"
import { useEffect, useState } from "react"

const Form = () => {
  const { feature, img, title, text } = {
    feature: "prompt-to-image",
    img: "/icons/generate.png",
    title: "Prompt to Image",
    text: "Give our AI some sentence to generate an image."
  }
  const [imgButton, setImgButton] = useState("/circle.png")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading) {
      setImgButton("/circle.gif")
    } else {
      setImgButton("/circle.png")
    }
  }, [loading])
  return (
    <>
      <img src={img} alt={feature} width={45} height={45} style={{ objectFit: "contain" }} />
      <h1 className="font-pro text-xl md:text-3xl font-bold">{title}</h1>
      <p className="text-center">{text}</p>
      <div className="flex flex-col gap-2 w-full items-center">
        <div className="w-3/4 bg-gray-200 flex items-between">
          <input required type="text" name="image" className="p-1 ps-2 flex-1 text-black" placeholder="Write here your request image to generate.." />
        </div>
      </div>
      <button onClick={() => setLoading(true)} type="submit" className="h-9 w-24 bg-white rounded-3xl items-center justify-around flex flex-row">
        <p className="text-pro text-black text-sm">Generate</p>
        <img src={imgButton} alt="" height={30} width={30} style={{ objectFit: "contain" }} />
      </button>
      <canvas id="canvas" style={{ display: "none" }}></canvas>
    </>
  )
}

const page = ({ status }: { status: boolean }) => {
  const urlAction = status ? "/api/features/prompt-to-image" : ""
  if (status) {
    return (
      <form action={urlAction} method="GET" className="py-2 flex flex-col justify-around items-center bg-gradfeatureblue bg-shrink bg-no-repeat text-white rounded-xl min-h-400 w-64 md:w-full h-full">
        <Form />
      </form>
    )
  } else {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        Swall()
      }} className="py-2 flex flex-col justify-around items-center bg-gradfeatureblue bg-shrink bg-no-repeat text-white rounded-xl min-h-400 w-64 md:w-full h-full" >
        <Form />
      </form >
    )

  }

}

export default page