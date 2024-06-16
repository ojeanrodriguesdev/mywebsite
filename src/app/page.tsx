import Image from "next/image";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <About />
      </main>
    </>
  );
}
