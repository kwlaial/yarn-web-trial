import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      {/*Navigation Bar*/}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center"> 
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center"></div>
        <p className="text-lg text-textBase font-medium"> LAI KAM WAI</p>

        <div className="hidden md: flex items-center gap-6 ml-6 flex-1">
          <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100
          ease-in-out">Home</a>
        </div>
      </nav>
      <div className="relative" id="home">
        <Spline scene="https://prod.spline.design/jkji4T0ieM4AK59g/scene.splinecode" />
      </div>
    </div>
  );
}



