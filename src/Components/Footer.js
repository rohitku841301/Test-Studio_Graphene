import { useState } from "react";
import footerBg from "../../public/Images/footerBg.png";

const Footer = () => {
  const [details, setDetails] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formCheck = (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      setDetails(false);
    } else {
      setDetails(true);
    }
  };

  console.log(details);

  return (
    <>
      <div className="">
        <div className="relative w-full h-[635px] lg:h-[520px] md:h-[480px] sm:h-[450px]">
          <img
            className="w-full h-[635px] lg:h-[520px] md:h-[480px] sm:h-[450px]"
            src={footerBg}
            alt=""
          />
          {/* <div className="w-[400px] flex justify-center"> */}
          <div className="flex justify-center absolute  bottom-[470px] p-5 text-gray50 w-full lg:left-[103px] lg:bottom-[358px] md:bottom-[320px] sm:w-[337px] sm:text-left sm:bottom-[280px] sm:p-5">
            <div className="w-[300px] text-center">
              <h2 className="font-syne text-[26px] font-semibold">
                Newsletter
              </h2>
              <p className="text-[18px] font-sans font-normal">
                Get news about articles and updates in your inbox.
              </p>
            </div>
          </div>
          <div className=" w-full flex justify-center absolute  bottom-[260px] text-gray50  lg:left-[616px] lg:bottom-[300px] lg:w-[35%] md:left-[480px] md:bottom-[265px] sm:left-[380px] sm:bottom-[220px] sm:w-[35%] xs:bottom-[280px]">
            <div className="w-[90%]">
              <form
                action=""
                className="flex flex-col w-full"
                onSubmit={formCheck}
              >
                <div className="h-[60px]">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="placeholder:text-gray50 text-[18px] leading-5 border-b border-white focus:outline-none p-2 w-full bg-transparent "
                  />
                  <p className="text-sm mt-1">
                    {details === false && !name && (
                      <span>*required</span>
                    )}
                  </p>
                </div>
                <div className="h-[60px]">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="placeholder:text-gray50 text-[18px] leading-5 border-b border-white focus:outline-none p-2 w-full bg-transparent "
                  />

                  <p className="text-sm mt-1">
                    {" "}
                    {details === false && !email && (
                      <span>*required</span>
                    )}{" "}
                  </p>
                </div>

                <div className="h-[60px]">
                  <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="placeholder:text-gray50 text-[18px] leading-5 border-b border-white focus:outline-none p-2 w-full bg-transparent "
                  />
                  <p className="text-sm mt-1">
                    {" "}
                    {details === false && !message && (
                      <span>*required</span>
                    )}{" "}
                  </p>
                </div>

                <button className="text-footerBtn absolute left-[65%] top-[240px] z-20 w-[100px] h-[100px] border-2 border-footerBtn rounded-full xl:left-[100%] xl:top-[190px] lg:w-[181px] lg:h-[181px] lg:top-[210px] md:w-[161px] md:h-[161px] md:left-[42%] md:top-[195px] sm:left-[30%] sm:top-[200px] sm:w-[121px] sm:h-[121px] xs:top-[270px] xs:left-[60%]">
                  SEND
                </button>
              </form>
            </div>
          </div>

          <div className="absolute bottom-[70px] left-[20px] z-10 w-[70%] xl:w-[93%] lg:bottom-[40px] xl:left-[90px] sm:bottom-8 sm:left-[50px] xs:bottom-[40px]">
            <h1 className="leading-[39px] text-white font-syne text-[55px] flex flex-col font-extrabold xl:text-[135px] lg:text-[120px] lg:leading-[105px] md:text-[100px] md:leading-[95px] sm:text-[70px] sm:leading-[75px] xs:text-[62px] xs:leading-[65px]">
              <span className="">GET</span> <span>IN TOUCH</span>
            </h1>
          </div>
        </div>

        <div className="w-full h-16 bg-black flex justify-center items-center">
          <p className="text-white text-xs font-poppins">
            Copyright 2022 All Right Reserved By SG
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
