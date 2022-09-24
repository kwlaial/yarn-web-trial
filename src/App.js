import Spline from '@splinetool/react-spline';
import { useState } from 'react'; 

export default function App() {

  const [isActive, settIsActive] = useState(false);
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      {/*Navigation Bar*/}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center"> 
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
        <p className="text-lg text-Name font-medium ">Kelly LAI</p>

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">

            <a href="#home" className="text-base text-textBase font-medium hover:text-Hover cursor-pointer duration-100 
            ease-in-out">Home</a>

            <a href="#about" className="text-base text-textBase font-medium hover:text-Hover cursor-pointer duration-100 
            ease-in-out">About</a>

            <a href="#projects" className="text-base text-textBase font-medium hover:text-Hover cursor-pointer duration-100 
            ease-in-out">Projects</a>

            <a href="#contact" className="text-base text-textBase font-medium hover:text-Hover cursor-pointer duration-100 
            ease-in-out">Contact</a>

            <a href="#" className="ml-auto text-base text-textBase font-medium hover:text-Hover cursor-pointer border border-textBase
            px-2 py-1 rounded-xl hover:border-grey-100 duration-100 ease-in-out">Download</a>

          </div>
        </div>
      </nav>

      <div className="relative" id="home">
        <Spline scene="https://prod.spline.design/jkji4T0ieM4AK59g/scene.splinecode" />
      </div>
    </div>
  );
}



