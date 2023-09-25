import bannerBg from "../../public/Images/bannerBg.png";
import bannerBoy from "../../public/Images/bannerBoy.png";
import arrow from "../../public/Images/arrow.svg";
import bannerBoy1 from "../../public/Images/bannerBoy1.png";
import Navbar from "./Navbar";
import hamburger from "../../public/Images/hamburger.svg"
import cross from "../../public/Images/cross.svg";
import { useState, useEffect } from "react";


const Banner = () => {

  const [ham, setHam] = useState(hamburger);

  const handleClick = ()=>{
      ham===hamburger?setHam(cross):setHam(hamburger)
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="w-full  bg-headerBg relative h-[600px] lg:h-[749px] md:h-[649]">
      <img
        className="w-full h-[600px] lg:h-[749px] md:h-[649]"
        src={bannerBg}
        alt="bannerBg"
      />
      <img
        className="hidden sm:block w-full absolute bottom-0 h-[500px] lg:h-[649px] md:h-[550px]"
        src={bannerBoy}
        alt="bannerBoy"
      />
      <img
        className="absolute bottom-0 h-[500px] sm:hidden"
        src={bannerBoy1}
        alt="bannerBoy1"
      />

      <div className="flex justify-between items-center absolute top-0 w-full px-[30px] sm:px-[60px]">
        <h1 className="text-[30px] font-poppins font-extralight text-shopcart sm:text-[40px]">ShopKart</h1>
        <div className="hidden text-[14px] font-semibold font-sans text-shopcart sm:flex ">
          <h2 className="mx-1">WISHLIST (0)</h2>
          <h2 className="mx-1">BAG (0)</h2>
        </div>
        <img src={ham} alt="hamburger" className="cursor-pointer sm:hidden" onClick={handleClick}/>
      </div>
      <div className="w-full h-0 px-[30px] flex items-center absolute top-12 sm:h-[22px] sm:px-[60px]">
      <div className="border-[1px] border-white w-full sm:border-2"></div>
      </div>

    
      <div className="w-full absolute top-14 left-0 sm:left-8 sm:w-auto z-20">
        {
          (screenWidth>640)?<Navbar ham={ham}/>:(ham===cross && <Navbar />)
        } 
      </div>

      <h1 className="font-extrabold font-syne text-white flex flex-col 
      absolute bottom-[150px] left-2 xl:left-32 sm:left-16  xs:left-10 sm:bottom-[190px]
      text-[55px] xs:text-[60px] sm:text-[70px] md:text-[90px] lg:text-[135px]    
      leading-[50px] lg:leading-[102px] md:leading-[80px] sm:leading-[60px] z-10">
        <span>Fresh</span>
        <h2 className="text-stroke ml-20 lg:ml-80 sm:ml-48 xs:ml-28">
          <span className="">2022</span>
        </h2>
        <span className="ml-[40px] sm:ml-[70px] xs:ml-[60px]">Look</span>
      </h1>
      <button className="flex text-white border-[1px] gap-1 border-white items-center text-sans absolute bottom-[20px] left-[60px] md:left[115px] sm:bottom-[60px] sm:left-[90px]">
        See more <img src={arrow} alt="arrow" />
      </button>
          
    </div>
  );
};

export default Banner;
