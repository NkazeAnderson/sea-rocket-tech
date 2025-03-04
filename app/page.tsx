import NavBar from "./components/NavBar";
import FlexLayout from "./components/ui/FlexLayout";
import { Heading1, Heading2, Paragraph } from "./components/ui/Text";
import Button from "./components/ui/Button";
import Image from "./components/ui/Image";
import { IconCardProps, TechStackProps } from "@/types";
import IconCard from "./components/IconCard";
import OurStackCard from "./components/OurStackCard";
import { projects } from "@/utils/constants";
import ShowOffCard from "./components/ShowOffCard";

const homeIconCards: IconCardProps[] = [
  {
    heading: "Website Development",
    description: "Beautiful, fast and branded websites",
    icon: "/websiteIcon.svg",
  },
  {
    heading: "Mobile App Development",
    description: "Modern android and iphone  apps",
    icon: "/mobileApp.svg",
  },
  {
    heading: "Backend and Cloud Development",
    description: "Robust, Secure and optimized",
    icon: "/serverIcon.svg",
  },
];

const techStacks: TechStackProps[] = [
  {
    image: "/react.png",
    title: "React Js",
  },
  {
    image: "/atom.png",
    title: "React Native",
  },
  {
    image: "/wordpress.png",
    title: "Wordpress",
  },
  {
    image: "/nextjs.png",
    title: "Next Js",
  },
  {
    image: "/node-js.png",
    title: "Node Js",
  },
  {
    image: "/aws.png",
    title: "AWS",
  },
  {
    image: "/firebase.png",
    title: "Firebase",
  },
  {
    image: "/sql.png",
    title: "Databases",
  },
];

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-darkBlue">
      <NavBar />
      <FlexLayout
        direction={"row-large-only"}
        container
        className="py-10 items-center "
      >
        <FlexLayout direction="column-always" className="flex-1/2 gap-9">
          <Heading2 color="purple">Sea Rocket Tech</Heading2>
          <div>
            <Heading1>Make more money</Heading1>
            <Heading1>With Technology</Heading1>
          </div>
          <Paragraph className="leading-9">
            Building websites and phone apps that amazes your customers. We give
            your contacts a beautiful experience when interacting with your
            business online
          </Paragraph>
          <FlexLayout className=" items-center w-full">
            <Button>View Pricing</Button>
          </FlexLayout>
        </FlexLayout>
        <FlexLayout className="flex-1/2 items-center justify-center">
          <div className="max-w-[500] max-h-[500]">
            <Image src={"/heroImg.png"} width={500} height={500} />
          </div>
        </FlexLayout>
      </FlexLayout>
      <FlexLayout container className=" justify-between items-center gap-2">
        {homeIconCards.map((item) => (
          <div key={item.heading} className="flex-1/3">
            <IconCard info={item} />
          </div>
        ))}
      </FlexLayout>
      <Heading2 alignment="center" className="py-[100px]">
        Our Tech Stack
      </Heading2>
      <FlexLayout
        direction="row-always"
        className=" justify-between items-center px-4"
      >
        {techStacks.map((item) => (
          <OurStackCard key={item.title} info={item} />
        ))}
      </FlexLayout>
      <Heading2 alignment="center" className="py-[100px]">
        Some projects we have completed
      </Heading2>
      <FlexLayout
        direction="column-always"
        container
        className=" gap-4 bg-[url(/background-lines.png)] bg-repeat"
      >
        {projects.map((item, index) => (
          <ShowOffCard
            key={item.title}
            info={item}
            buttonText="View App"
            reversed={index % 2 == 1}
          />
        ))}
      </FlexLayout>
    </div>
  );
}
