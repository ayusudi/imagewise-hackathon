// Function to convert image to WebP
function convertToWebP(imageDataUrl, fileName) {
  const img = new Image();
  img.src = imageDataUrl;
  img.onload = () => {
    const canvas = document.getElementById('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);

    const webpDataUrl = canvas.toDataURL('image/webp');
    downloadWebP(webpDataUrl, fileName);
  };
}

// Function to download the converted WebP image
function downloadWebP(dataUrl, fileName) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = fileName.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  link.click();
}

// Event listener for the conversion button
const convertBtn = document.getElementById('convertBtn');
if (convertBtn) {
  convertBtn.addEventListener('click', () => {
    const imageInput = document.getElementById('imageInput');
    const files = imageInput.files;

    if (files.length === 0) {
      alert('Please select one or more image files.');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        convertToWebP(reader.result, file.name);
      };
    }
  });
}

