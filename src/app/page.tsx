import HeroSection from "@/components/HeroSection";
import RecentPost from "@/components/RecentPost";
import FutureWorks from "@/components/FutureWorks";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="md:w-1440px md:h-2453px w-full h-auto p-2">
        <HeroSection/>
        <RecentPost/>
        <FutureWorks/>
        <Footer/>
    </div>
  )
}
