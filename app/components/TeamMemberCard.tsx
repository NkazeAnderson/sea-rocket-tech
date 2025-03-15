import React from "react";
import Image from "./ui/Image";
import { TeamMemberCardT } from "@/types";

function TeamMemberCard({ member }: { member: TeamMemberCardT }) {
  return (
    <div>
      <div className="aspect-video">
        <Image src={member.image} width={400} height={400} />
      </div>
      <div className="text-white text-center">
        <p className="font-bold">{member.name}</p>
        <p className="text-center">{member.role}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
