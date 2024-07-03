import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Service from "@/components/Service";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Stats/>
    <WhoWeAre/>
    <Service/>
    <Testimonial/>
    <Faq/>
    <CTA/>
    </>
  );
}
