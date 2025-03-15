import { NavLinkProps, reviewT, showOffCardProps, TeamMemberCardT } from "@/types";

export const navLinks:NavLinkProps[] = [{
    text:"Home",
    href:"/",
},
{
    text:"Projects",
    href:"/projects",
},
{
    text:"services",
    href:"/services",
},
{
    text:"contact us",
    href:"/contact us",
}
]

export const demoReviews:reviewT[] = [
    {
    image:"/facePicture.jpg",
    message:"Lorem ipsum is a dummy  or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have  content."
},
    {
    image:"/facePicture.jpg",
    message:"Lorem ipsum is a dummy  or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have  content."
},
    {
    image:"/facePicture.jpg",
    message:"Lorem ipsum is a dummy  or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have  content."
},
]

export const projects : showOffCardProps[] = [
{
    title: "ChopAsap",
    description: "A food cater mobile application which enables users to order food from store",
    image: "/chopasapProduct.png",
},
{
    title: "STONEFARMS",
    description: "A food cater mobile application which enables users to order food from store",
    image: "/chopasapProduct.png",
},
]

export const demoTeamMembers:TeamMemberCardT[] = [
    {
        image: "/facePicture.jpg",
        name: "Nkaze Anderson",
        role:"Web Developer"
    },
    {
        image: "/facePicture.jpg",
        name: "Nkaze Anderson",
        role:"Web Developer"
    },
    {
        image: "/facePicture.jpg",
        name: "Nkaze Anderson",
        role:"Web Developer"
    },
]