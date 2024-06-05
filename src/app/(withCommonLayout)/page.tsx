import BestServices from "@/component/HomeComponent/BestServices";
import HomeCardComponent from "@/component/HomeComponent/HomeCardComponent";
import HomeThumbnail from "@/component/HomeComponent/HomeThumbnail";
import PhotoGallery from "@/component/HomeComponent/PhotoGallery";

export default function Home() {
  return (
    <main>
      <HomeThumbnail />
      <HomeCardComponent />
      <BestServices />
      <PhotoGallery/>
    </main>
  );
}
