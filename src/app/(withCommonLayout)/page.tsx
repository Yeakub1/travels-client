import Container from "@/component/Container/Container";
import HomeCardComponent from "@/component/HomeComponent/HomeCardComponent";
import HomeFeaturedDestinations from "@/component/HomeComponent/HomeFeaturedDestinations";
import HomeThumbnail from "@/component/HomeComponent/HomeThumbnail";
import HomeTravelGuides from "@/component/HomeComponent/HomeTravelGuides";

export default function Home() {
  return (
    <main>
      <Container>
        <HomeThumbnail />
        <HomeCardComponent />
        <HomeFeaturedDestinations />
        <HomeTravelGuides />
      </Container>
    </main>
  );
}
