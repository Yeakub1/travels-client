const multipleImageHelper = async (photos: File[]) => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${"8460cd1a14bf680b3bf68fe6e9950c8d"}`;
  const uploadedImageUrls = [];

  for (const photo of photos) {
    const formData = new FormData();
    formData.append("image", photo);

    try {
      const imageUploadResponse = await fetch(image_hosting_url, {
        method: "POST",
        body: formData,
      });

      const imageDataJson = await imageUploadResponse.json();

      if (imageDataJson.success) {
        uploadedImageUrls.push(imageDataJson.data.display_url);
      } else {
        console.error("Error uploading image:", imageDataJson.error.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  console.log(uploadedImageUrls, "dadad");
  return uploadedImageUrls;
};

export default multipleImageHelper;
