import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoYoutube,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoWhatsapp,
  } from "react-icons/io5";
  import img1 from "./Img/laser.jpg";
  import img2 from "./Img/umichenv.jpeg";
  import img3 from "./Img/umichlib.jpeg";
  import img4 from "./Img/umichtree.jpeg";
  import img5 from "./Img/umich.jpeg";
  import img6 from "./Img/umich.jpeg";
  
export const Experience = [
    {
      id: 1,
      date: "Sep 2020 - present",
      iconsSrc: <IoCodeWorking />,
      title: "Bachelor at The Hong Kong University of Science and Technology",
      location: "Hong Kong",
      description:
        "School of Engineering: BSc Integrative System and Design (ISD), Year 3 ( CGA: 3.202 )",
    },
    {
      id: 2,
      date: "Jun 2021 - Aug 2021",
      iconsSrc: <IoCodeWorking />,
      title: "Undergraduate Research Intern - Unity Game Developer",
      location: "Hong Kong",
      description:
        "Build 3D laser cutter environment in Unity game engine for new students laser cutter training.",
    },
    {
      id: 3,
      date: "Jan 2022 - May 2022",
      iconsSrc: <IoCodeWorking />,
      title: "Computer Vision and Computational Design Research",
      location: "Hong Kong",
      description:
        "Semi-automatic segmentation tool development, Learn the segmentation data labeling interactive tool and help with data labeling, Get familiar with the latest deep learning-based segmentation model and image processing, Help online tool development with web-based design, back-end design, API programming, etc.",
    },
    {
      id: 4,
      date: "Jun 2022 - Aug 2022",
      iconsSrc: <IoCodeWorking />,
      title: "VR Hand-tracking Sculpture Development with Unreal Engine",
      location: "Hong Kong",
      description:
        "Create an art studio in VR environment for sculpture purposes, Make use of the hand-tracking function in VR headset for gesture recognition to enable actions (e.g. scale-up, zoom in, pull etc)",
    },
    {
      id: 5,
      date: "Sep 2022 - present",
      iconsSrc: <IoCodeWorking />,
      title: "Bachelor at University of Michigan - Ann Arbor",
      location: "Michigan, USA",
      description:
        "Major in Electrical Engineering",
    },
  ];
  
  export const Projects = [
    {
      id: 1,
      name: "Food Delivery UI Mockup",
      imageSrc: img1,
      techs: "React Js, Redux, Material UI",
      github: "#",
    },
    {
      id: 2,
      name: "Full Stack Social Media App ",
      imageSrc: img2,
      techs: "React Js, Sanity, Tailwind CSS",
      github: "#",
    },
    {
      id: 3,
      name: "Travel Advisor",
      imageSrc: img3,
      techs: "React Js, Chakra UI, Google API",
      github: "#",
    },
    {
      id: 4,
      name: "Pintrest UI Clone 2.0 ",
      imageSrc: img4,
      techs: "React Js,  Material UI",
      github: "#",
    },
    {
      id: 5,
      name: "Own Video Blog",
      imageSrc: img5,
      techs: "React Js, Chara UI, Firebase",
      github: "#",
    },
    {
      id: 6,
      name: "Whatsapp UI Clone",
      imageSrc: img6,
      techs: "NextJs, Firebase Auth",
      github: "#",
    },
  ];

  export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "#",
    },
    {
      id: 2,
      iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
      name: "YouTube",
      link: "#",
    },
    {
      id: 3,
      iconSrc: (
        <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Twitter",
      link: "#",
    },
    {
      id: 4,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "#",
    },
    {
      id: 5,
      iconSrc: (
        <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
      ),
      name: "Whatsapp",
      link: "#",
    },
  ];
  