const page = () => {
  const { feature, img, title, text } = {
    feature: "webp-converter",
    img: "/icons/webp.png",
    title: "Webp Converter",
    text: "Unlimited attempts to try our WebP converter feature."
  }

  return (
    <div className="py-2 flex flex-col justify-around items-center bg-gradfeatureblue bg-shrink bg-no-repeat text-white rounded-xl min-h-400 w-64 md:w-full h-full">
      <img src={img} alt={feature} width={45} height={45} style={{ objectFit: "contain" }} />
      <h1 className="font-pro text-xl md:text-3xl font-bold">{title}</h1>
      <p className="text-center">{text}</p>
      <div className="flex flex-col gap-2 w-full items-center">
        <div className="w-3/4 bg-gray-200 p-1 flex items-between">
          <input required type="file" accept="image/*" name="file" id="imageInput" multiple className="flex-1 text-black" />
        </div>
      </div>
      <button id="convertBtn" type="submit" className="h-9 w-24 bg-white rounded-3xl items-center justify-around flex flex-row">
        <p className="text-pro text-black text-sm">Convert</p>
        <img src="/circle.png" alt="" height={30} width={30} style={{ objectFit: "contain" }} />
      </button>
      <canvas id="canvas" style={{ display: "none" }}></canvas>
    </div>
  )
}

export default page