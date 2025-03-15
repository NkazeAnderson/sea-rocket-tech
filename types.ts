import { Url } from "next/dist/shared/lib/router/router";

export interface NavLinkProps {
    href: Url;
    text: string;
  }

export interface IconCardProps {
    heading: string;
    description: string;
    icon: string;
  }

export interface TechStackProps { image: string; title: string }

export interface showOffCardProps {
    image: string;
    title: string;
    description: string;
  }
  export interface TeamMemberCardT {
    image: string;
    name: string;
    role: string;
  }
  export interface reviewT {
    image:string,
    message:string
  }