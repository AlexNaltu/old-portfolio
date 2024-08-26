import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const navLinks = [
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

export const aboutMe = [
  {
    title: "Name:",
    description: "Naltu Alexandru",
  },
  {
    title: "Age:",
    description: "19",
  },
  {
    title: "Languages:",
    description: "English,German,Romanian",
  },
  {
    title: "Where I live:",
    description: "Germany",
  },
  {
    title: "Hobbies:",
    description: "Gaming, Drawing, Gym",
  },
];

export const socials = [
  {
    icon: <FaFacebook size={30} />,
    url: "https://www.facebook.com/alex.naltu.1/?_rdr",
  },
  {
    icon: <AiFillInstagram size={30} />,
    url: "https://www.instagram.com/imnotalxn/",
  },
  {
    icon: <FaGithub size={30} />,
    url: "https://github.com/AlexNaltu",
  },
  {
    icon: <FaLinkedinIn size={30} />,
    url: "https://www.linkedin.com/in/alex-naltu-2a391a275/",
  },
];

export const websites = [
  {
    title: "Alxn Store",

    badges: ["Next.js", "React", "TailwindCSS", "Sanity CMS", "Redux"],
    image: "/alxnstore.png",
    url: "https://www.adelinvisuals.art/",
    github: "https://github.com/AlexNaltu/adelinvisuals",
  },
  {
    title: "Adelin Visuals Photography",

    badges: ["Next.js", "React", "TailwindCSS", "Email.js", "Swiper.js"],
    image: "/adelinv.png",
    url: "https://www.adelinvisuals.art/",
    github: "https://github.com/AlexNaltu/adelinvisuals",
  },
];
