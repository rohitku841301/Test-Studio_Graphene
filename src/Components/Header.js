import logo from "../../public/Images/logo.svg";
import facebook from "../../public/Images/facebook.svg";
import linkedin from "../../public/Images/linkedin.svg";
import twitter from "../../public/Images/twitter.svg";
import instagram from "../../public/Images/instagram.svg";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-[42px] bg-headerBg text-headerFont font-poppins font-normal">
      <div className="flex ml-[10px] items-center sm:ml-[60px] cursor-pointer">
        <img className="w-[21px] h-[12.9px] mx-[1px]" src={logo} alt="logo" />
        <h2 className="text-[12px] mx-1 sm:mx-2">Free Delivery</h2>
        <div className="border-[1px] mx-1 sm:mx-2 border-headerFont h-[19px]"></div>
        <h2 className="text-[12px] mx-1 sm:mx-2">Return Policy</h2>
      </div>
      <div className=" flex items-center mr-[10px] sm:mr-[60px] cursor-pointer">
        <h2 className="text-[10px] mx-2 sm:mx-3">Login</h2>
        <h2 className="text-[10px] mx-2 sm:mx-3">Follow US</h2>
        <img
          className="w-[4.5px] h-[7.6px] mx-[2px] sm:mx-1"
          src={facebook}
          alt="facebook-logo"
        />
        <img
          className="w-[8px] h-[7.64px] mx-[2px] sm:mx-1"
          src={linkedin}
          alt="linkedin-logo"
        />
        <img className="w-[7.6px] h-[5.6px] mx-[2px] sm:mx-1" src={twitter} alt="twitter-logo" />
        <img className="w-[8px] h-[8px] mx-[2px] sm:mx-1" src={instagram} alt="instagram-logo" />
      </div>
    </div>
  );
};

export default Header;
