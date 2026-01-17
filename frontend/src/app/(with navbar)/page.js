import HeroSection from "@/components/home/HeroSection";
import Trending from "@/components/home/Trending";
// import MoviesCarousel from "@/components/home/MoviesCarousel";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Trending/>
        {/* <MoviesCarousel/> */}
    </main>
  );
}
