import React from "react";
import ShowOffCard from "../components/ShowOffCard";
import FlexLayout from "../components/ui/FlexLayout";
import PageHeader from "../components/PageHeader";
import { projects } from "@/utils/constants";
import FilterButtons from "./FilterButtons";

function ProjectPage() {
  return (
    <>
      <PageHeader title="Projects" />
      <div className="py-6 border-b-2 border-purple  px-[50px]">
        <FilterButtons />
      </div>
      <div className="p-[50px]">
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
    </>
  );
}

export default ProjectPage;
