import Image from "next/image";

import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Services } from "./components/Services";
import { Bannar } from "./components/Bannar";


export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Bannar />
    </>
  );
}
