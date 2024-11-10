import Awards from "@/components/Awards";
import Companies from "@/components/Companies";
import Courses from "@/components/Courses";
import Demo from "@/components/Demo";
import Example from "@/components/Example";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Trophy from "@/components/Trophy";

export default function Home() {
  return (
    <div className="font-mimopro">
      <div className=" z-100000 top-4 left-4 right-4 bottom-4 pointer-events-none">
        <div className="m-0 flex w-full flex-col items-center justify-between bg-marketing-background-primary">
          <Navbar />
           <div className="mb-16 mt-8 px-6 md:mt-8 md:px-10 lg:mt-16">
            <Intro />
            <Companies />
            <Example />
            <Trophy />
            <Courses />
            <Awards />
            <Demo />
            <Features />
          </div>
          <Footer /> 
        </div>
      </div>
    </div>
  );
}
