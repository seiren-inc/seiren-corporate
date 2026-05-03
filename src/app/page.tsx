import { About } from "@/components/sections/About";
import { Access } from "@/components/sections/Access";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Access />
      </main>
      <Footer />
    </>
  );
}
