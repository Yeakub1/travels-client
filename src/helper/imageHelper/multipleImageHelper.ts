// const multipleImageHelper = (photos: any) => {
//   const image_hosting_url = `https://api.imgbb.com/1/upload?key=${"8460cd1a14bf680b3bf68fe6e9950c8d"}`;

//   const formData = new FormData();
//   const image: string[] = [];
//   photos?.forEach((element: any) => {
//     formData.append("image", element);
//     fetch(image_hosting_url, {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then(async (imageResponse) => {
//         if (imageResponse.success) {
//           const imageURL = await imageResponse.data.display_url;

//           console.log(imageURL, "url");

//           image.push(imageResponse);
//         }
//       });
//   });

//   console.log(image, ["tonu"]);
//   return image;
// };

// export default multipleImageHelper;

const multipleImageHelper = async (photos: File[]) => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${"8460cd1a14bf680b3bf68fe6e9950c8d"}`; // Replace with your actual API key
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
        // Handle upload errors (e.g., display a toast message)
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle network or other errors (e.g., display a toast message)
    }
  }

  console.log(uploadedImageUrls, "dadad");
  return uploadedImageUrls;
};

export default multipleImageHelper;
