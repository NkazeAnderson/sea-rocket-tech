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