import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react";
import TrustedBy from "./components/TrustedBy";
import Benefits from "./components/Benefits";
import Why from "./components/Why";
import { MoveUpRightIcon } from "lucide-react";
import Specifications from "./components/Specifications";
import HowTo from "./components/HowTo";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
const App = () => {

  const width = useWindowWidth();

  return (
    <div className="xl:px-10 px-5  py-5 w-full flex flex-col dm-sans">
      <div className="flex flex-row items-center">
        {width > 800 ?
          <div className='flex flex-row h-[60px] w-full justify-between items-center'>
            <a href="/"><p className='text-[30px] font-medium tracking-tighter'>Area</p></a>
            <button className='bg-[#485c11] rounded-full text-[14px] font-bold text-white px-6 py-3 w-fit cursor-pointer flex flex-row items-center '>
              <p>Learn More</p>
              <MoveUpRightIcon className="size-3 " />
            </button>
          </div> : ""}
        <Navbar width={width} />
      </div>

      <Hero width={width} />
      <FadeInSection>
        <TrustedBy />
      </FadeInSection>
      <FadeInSection>
        <Benefits width={width} />
      </FadeInSection>
      <FadeInSection>
        <Why />
      </FadeInSection>
      <FadeInSection>
        <Specifications />
      </FadeInSection>
      <FadeInSection>
        <HowTo />
      </FadeInSection>
      <FadeInSection>
        <Connect />
      </FadeInSection>
      <hr />
      <Footer />

    </div>
  )
}

export default App