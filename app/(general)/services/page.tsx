import React from "react";
import { Heading2, Heading3 } from "../../components/ui/Text";
import { showOffCardProps } from "@/types";
import ShowOffCard from "../../components/ShowOffCard";
import FlexLayout from "../../components/ui/FlexLayout";
import Cloud from "../../../assets/verified-check.svg";
import CurlyArrow from "../../../assets/curly-arrow.png";
import Image from "next/image";
import Button from "../../components/ui/Button";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

type reasonT = Omit<showOffCardProps, "image">;

const reasonsToChooseUs: reasonT[] = [
  {
    title: "Experience",
    description: "We have +3 years of experience in all the services we offer",
  },
  {
    title: "Security Awareness",
    description: "We guarantee the security of your applications",
  },
  {
    title: "Fast Results",
    description: "Get your applications at 30% lesser time compared to others",
  },
  {
    title: "Maintainable",
    description: "We design your software to be efficient and easy to manage",
  },
  {
    title: "Scalable",
    description:
      "We design your software to be easy add new functionality with growth",
  },
  {
    title: "Affordable",
    description: "We keep our services price affordable for all classes",
  },
];

function BadgeCard({ reason: { title, description } }: { reason: reasonT }) {
  return (
    <div className="border-4 border-purple rounded-b-2xl">
      <FlexLayout
        direction="row-always"
        className=" items-center gap-2 p-2 bg-purple"
      >
        <Image src={Cloud} width={64} height={64} alt="cloudSVG" />
        <Heading3>{title}</Heading3>
      </FlexLayout>
      <FlexLayout direction="row-always" className=" items-center gap-6 p-2">
        <div className="w-16"></div>
        <p className="py-6">{description}</p>
      </FlexLayout>
    </div>
  );
}

const services: showOffCardProps[] = [
  {
    title: "Website Development",
    description:
      "We build beautiful, fast and responsive websites of all types. Using technologies such as wordpress, reactJs and NextJs.",
    image: "/kindpng_3348267.png",
    link:
      "	https://wa.me/237683403750?" +
      new URLSearchParams({
        text: "Hi, I am interested in building a website.",
      }).toString(),
  },
  {
    title: "Mobile App Development",
    description:
      "We build native android and iPhone applications keeping your clients constantly engaged with your business",
    image: "/kindpng_4443906.png",
    link:
      "	https://wa.me/237683403750?" +
      new URLSearchParams({
        text: "Hi, I am interested in building a mobile app.",
      }).toString(),
  },
  {
    title: "Cloud Based Backend Development",
    description:
      "We build backends on the cloud empowering businesses with powerful tools to run compute intensive and security compliant businesses",
    image: "/cloud.png",
    link:
      "	https://wa.me/237683403750?" +
      new URLSearchParams({
        text: "Hi, I am interested in building a cloud based application.",
      }).toString(),
  },
  {
    title: "UI/UX Design",
    description:
      "We design websites and app which resonate your business brand. We ensure your users get a modern experience when interacting with your business.t",
    image: "/ui-ux.png",
    link:
      "	https://wa.me/237683403750?" +
      new URLSearchParams({
        text: "Hi, I am interested in a UI Design for my app.",
      }).toString(),
  },
  {
    title: "Search Engine Optimization - SEO",
    description:
      "We do both onsite and offsite search engine optimization of your websites, making it ranking higher and recommended on google and other engines",
    image: "/seo.png",
    link:
      "	https://wa.me/237683403750?" +
      new URLSearchParams({
        text: "Hi, I am interested in optimizing my site for search engines.",
      }).toString(),
  },
  {
    title: "Tech Consultation",
    description:
      "We provide you with tech insights gained after years of experience in the industry. We will provide a detailed road map to achieving success in tech.",
    image: "/consultation.png",
    link:
      "	https://wa.me/237683403750?" +
      new URLSearchParams({
        text: "Hi, I am in need of booking time to discuss about my project.",
      }).toString(),
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" />
      <div className="px-4 lg:px-[50px]">
        <p className="text-center px-[10%] lg:px-[30%] py-12 text-base leading-9">
          Sea Rocket Tech is a group of highly skilled and experienced
          developers helping businesses and individuals in getting and
          satisfying more clients from the sea of infinite internet users. We
          provide the following services:
        </p>
        <section className="gap-16 flex flex-col">
          {services.map((item) => (
            <ShowOffCard
              info={item}
              key={item.title}
              buttonText="Get a quote"
              purple
              reversed
            />
          ))}
        </section>
        <section>
          <div className="pt-24 pb-10">
            <Heading2 alignment="center">Why Choose Us?</Heading2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16">
            {reasonsToChooseUs.map((item) => (
              <BadgeCard key={item.title} reason={item} />
            ))}
          </div>
        </section>
        <section className=" py-16 flex items-center justify-center !z-0">
          <div className="items-center flex flex-row">
            <div className="w-[160px] left-[20px] lg:left-[80] !z-0">
              <Link href={"/contact-us"}>
                <Button>Contact Us</Button>
              </Link>
            </div>
            <div>
              <Image
                src={CurlyArrow}
                width={200}
                height={200}
                alt="curly arrow"
              />
            </div>
            <div className="flex flex-col gap-10  right-2 lg:right-5 !z-0">
              <p className="font-bold">Hi there! Try us out</p>
              <p>Give us the opportunity to serve you</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ServicesPage;
