import React from "react";
import { Heading2, Heading3 } from "../components/ui/Text";
import { showOffCardProps } from "@/types";
import ShowOffCard from "../components/ShowOffCard";
import FlexLayout from "../components/ui/FlexLayout";
import Cloud from "../../assets/verified-check.svg";
import CurlyArrow from "../../assets/curly-arrow.png";
import Image from "next/image";
import Button from "../components/ui/Button";
import PageHeader from "../components/PageHeader";

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
  },
  {
    title: "Mobile App Development",
    description:
      "We build native android and iPhone applications keeping your clients constantly engaged with your business",
    image: "/kindpng_4443906.png",
  },
  {
    title: "Cloud Based Backend Development",
    description:
      "We build backends on the cloud empowering businesses with powerful tools to run compute intensive and security compliant businesses",
    image: "/cloud.png",
  },
  {
    title: "UI/UX Design",
    description:
      "We design websites and app which resonate your business brand. We ensure your users get a modern experience when interacting with your business.t",
    image: "/kindpng_3348267.png",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" />
      <div className="px-[50px]">
        <p className="text-center px-[30%] py-12 text-base leading-9">
          For all of our services, you are required to pay 25% upfront and 75%
          upon project completion. Most websites cost approximately these
          amounts but could cost more depending on project requirements. Please
          do well to contact us for a quote that matches your website needs.
        </p>
      </div>
    </>
  );
}

export default ServicesPage;
