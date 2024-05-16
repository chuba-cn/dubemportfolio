import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";

const Home = () => {
  return (
    <Wrapper>
      <Hero/>
      <Experiences/>
      <Skills/>
      <Certifications/>
      <Projects/>
      <Footer/>
    </Wrapper>
  );
};

export default Home;