import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative">
      {/*Navigation Bar*/}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        
      </nav>
      <div className="relative" id="home">
        <Spline scene="https://prod.spline.design/4lQ3BvxcYrtnZ6mN/scene.splinecode" />
      </div>
    </div>
  );
}



