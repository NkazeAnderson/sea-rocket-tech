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
    href:"/contact-us",
}
]

export const demoReviews:reviewT[] = [
    {
    image:"/no-pic.png",
    message:"Digital Brilliance Solutions truly launched our project into orbit! We needed a complex e-commerce platform built from scratch, and their team delivered an incredible solution. Their developers were highly skilled, and their project management was impeccable."
},
    {
    image:"/no-pic.png",
    message:"Digital Brilliance Solutions provided us with cutting-edge mobile app development that has revolutionized our customer engagement. Their team understood our vision perfectly and translated it into a user-friendly and visually stunning app."
},
    {
    image:"/no-pic.png",
    message:"We partnered with Digital Brilliance Solutions for a website redesign, and we couldn't be happier with the outcome. Our old website was outdated and difficult to navigate. Digital Brilliance Solutions's design team created a modern, visually appealing website that is incredibly user-friendly."
},
]

export const projects : showOffCardProps[] = [
{
    title: "ChopAsap",
    description: "A food cater mobile application which enables users to order food from store",
    image: "/chopasapProduct.png",
    link: "https://play.google.com/store/apps/details?id=com.walexxx23.chopasap"
},
{
    title: "STONEFARMS",
    description: "A website for an NGO involved in Agriculture",
    image: "/stone-farms-website.png",
    link: "https://stonefarms.org/"
},
]

export const teamMembers:TeamMemberCardT[] = [
    {
        image: "/nkaze.png",
        name: "Nkaze Anderson",
        role:"Web Developer"
    },
    {
        image: "/mbabit.png",
        name: "Mbabit Scotte",
        role:"DevOps Engineer"
    },
    // {
    //     image: "/facePicture.jpg",
    //     name: "Nkaze Anderson",
    //     role:"Web Developer"
    // },
]

export const companyInformation: {
    type:"email"|"address"|"phone",
    info:string,
    name:string
} [] = [
    {
        type:"phone",
        info:"+237683403750",
        name:"Phone"
    },
    {
        type:"email",
        info:"info@mails.digitalbrilliancesolutions.com",
        name:"Email",
    },
    {
        type:"address",
        info:"City Chemist, Bamenda, CMR",
        name:"Address",
    },
    
]