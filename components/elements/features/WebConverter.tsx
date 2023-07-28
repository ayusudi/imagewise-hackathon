import React, { ChangeEvent } from 'react';

const convertToWebP = (dataURL: string, fileName: string) => {
  const a = document.createElement('a');
  a.href = dataURL;
  a.download = `${fileName.replace(/\.[^/.]+$/, '')}.webp`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const Page: React.FC = () => {
  const { feature, img, title, text } = {
    feature: 'webp-converter',
    img: '/icons/webp.png',
    title: 'Webp Converter',
    text: 'Unlimited attempts to try our WebP converter feature.',
  };

  const handleConvertBtnClick = () => {
    const imageInput = document.getElementById('imageInput') as HTMLInputElement;
    const files = imageInput.files;

    if (!files || files.length === 0) {
      // alert('Please select one or more image files.');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          const img = new Image();
          img.src = result;

          img.onload = () => {
            const canvas = document.getElementById('canvas') as HTMLCanvasElement;
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(img, 0, 0, img.width, img.height);
              const webpDataUrl = canvas.toDataURL('image/webp');
              convertToWebP(webpDataUrl, file.name);
            }
          };
        }
      };

      reader.readAsDataURL(file);
    }
  };





  return (
    <div className="py-2 flex flex-col justify-around items-center bg-gradfeatureblue bg-shrink bg-no-repeat text-white rounded-xl min-h-400 w-64 md:w-full h-full">
      {/* eslint-disable jsx-a11y/alt-text */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={feature} width={45} height={45} style={{ objectFit: 'contain' }} />
      <h1 className="font-pro text-xl md:text-3xl font-bold">{title}</h1>
      <p className="text-center">{text}</p>
      <div className="flex flex-col gap-2 w-full items-center">
        <div className="w-3/4 bg-gray-200 p-1 flex items-between">
          <input
            required
            type="file"
            accept="image/*"
            name="file"
            id="imageInput"
            multiple
            className="flex-1 text-black"
          />
        </div>
      </div>
      <button
        id="convertBtn"
        type="button"
        className="h-9 w-24 bg-white rounded-3xl items-center justify-around flex flex-row"
        onClick={handleConvertBtnClick}
      >
        <p className="text-pro text-black text-sm">Convert</p>
        {/* eslint-disable jsx-a11y/alt-text */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/circle.png" alt="" height={30} width={30} style={{ objectFit: 'contain' }} />
      </button>
      <canvas id="canvas" style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default Page;
