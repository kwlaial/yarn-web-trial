import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoYoutube,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoWhatsapp,
  } from "react-icons/io5";
  import img1 from "./Img/laser.jpg";
  import img2 from "./Img/Sculpt.HEIC";
  import img3 from "./Img/lamp.jpg";
  import img4 from "./Img/Trini.jpg";
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
      name: "VR Laser Cutter Traning",
      imageSrc: img1,
      techs: "C#, Unity, Rhino",
      github: "https://github.com/kwlaial/VR-Laser-Cutter-Traning",
    },
    {
      id: 2,
      name: "VR Hand-tracking Sculpture Development with Unreal Engine",
      imageSrc: img2,
      techs: "Blender, Unreal Engine 4&5",
      github: "https://github.com/kwlaial/ArtStudIO",
    },
    {
      id: 3,
      name: "ISDN1006 Human-centered Innovation",
      imageSrc: img3,
      techs: "Adobe InDesign, Keyshot, Rhino",
      github: "https://github.com/kwlaial/ISDN1006-HUMAN-CENTERED-INNOVATION",
    },
    {
      id: 4,
      name: "ISDN2400 Physical Prototyping",
      imageSrc: img4,
      techs: "Solidworks, Rhino",
      github: "https://github.com/kwlaial/ISDN2400-PHYSICAL-PROTOTYPING/tree/main",
    },
    {
      id: 5,
      name: "Maze Solver PCB design",
      imageSrc: img5,
      techs: "KiCAD",
      github: "",
    },
    {
      id: 6,
      name: "Year 2 Project",
      imageSrc: img6,
      techs: "NextJs, Firebase Auth",
      github: "#",
    },
    {
      id: 7,
      name: "Year 3 Project",
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
  