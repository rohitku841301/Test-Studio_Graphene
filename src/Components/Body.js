import { useEffect, useState, useRef } from "react";
import ItemData from "./ItemData";
import blackStar from "../../public/Images/blackStar.svg";
import leftArrow from "../../public/Images/leftArrow.svg";
import rightArrow from "../../public/Images/rightArrow.svg";

const Body = () => {
  const [categoryData, setCategoryData] = useState(null);
  const [copyCategoryData, setCopyCategoryData] = useState(null);
  const [categoryName, setCategoryName] = useState(null);

  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  console.log(elementRef.current);

  useEffect(() => {
    category();
  }, []);

  const category = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setCategoryData(json);
    setCopyCategoryData(json);

    const data1 = await fetch("https://fakestoreapi.com/products/categories");
    const json1 = await data1.json();
    setCategoryName(json1);
  };

  const categories = (event) => {
    const buttonName = event.target.textContent;
    const items = copyCategoryData.filter(
      (cd) => cd.category === buttonName.toLowerCase()
    );
    setCategoryData(items);
  };

  if (categoryData === null || categoryName === null) return <h1>Loading..</h1>;

  return (
    <>
      <div className="my-[50px] lg:my-[100px] md:my-[70px] relative">
        <div className="flex justify-between items-center mx-[20px] lg:mx-[83px] md:mx-[63px] sm:mx-[43px]">
          <div className="">
            <h2 className=" font-syne text-[40px] text-bodyHeading font-semibold leading-[50.24px] lg:text-[90px] md:text-[70px] md:[108px] sm:[90px] xs:text-[45px] xs:leading-[60px]">
              New products
            </h2>
            <div className="flex items-center relative right-3 ">
              <img
                className="w-[16px] h[16px] xs:w-[22px] xs:h[22px]"
                src={blackStar}
                alt=""
              />
              <div className="w-[270px] h-[1px] bg-black lg:w-[648px] md:w-[500px] sm:w-[400px] xs:w-[350px]"></div>
            </div>
          </div>
          {/* <div className="w-full m-auto"> */}
          <div className=" hidden sm:flex">
            <button
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 25, 390, -10);
              }}
              // disabled={arrowDisable}
              className="mr-4 lg:mr-8"
            >
              <img className="w-[55px]" src={leftArrow} alt="" />
            </button>
            <button
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 25, 390, 10);
              }}
              className="ml-4 lg:ml-8"
            >
              <img className="w-[55px]" src={rightArrow} alt="" />
            </button>
            {/* </div> */}
          </div>
        </div>

        <div className="flex flex-col justify-between w-full mt-4  sm:flex-row sm:mt-8 sm:mb-0">
          <div className="flex flex-row ml-[10px] xs:ml-[20px] items-start mb-10 xl:w-[25%] lg:w-[35%] lg:ml-[83px] md:ml-[63px] sm:flex-col sm:w-[40%] sm:mb-0 sm:ml-[53px]">
            {categoryName.map((categoryName, index) => (
              <button
                key={index++}
                className="mx-2 sm:mx-3.5 sm:my-3.5 font-sans text-[16px] md:text-[18px] text-bodyHeading font-normal leading-[22px] hover:text-[18px] md:hover:text-[26px] hover:font-semibold sm:hover:text-[23px]"
                onClick={categories}
              >
                {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
              </button>
            ))}
          </div>

          <div className=" flex items-center space-x-4 relative xl:w-[75%] lg:w-[65%] sm:w-[60%]">
            <div
              className="flex scrollbar-hide overflow-hidden w-[100%]"
              ref={elementRef}
            >
              {categoryData.map((cd) => (
                <ItemData key={cd.id} itemData={cd} />
              ))}
            </div>
          </div>
        </div>

        <div className=" flex sm:hidden justify-center">
          <div>
            <button
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 25, 370, -10);
              }}
              disabled={arrowDisable}
              className="mr-4 lg:mr-8"
            >
              <img className="w-[55px]" src={leftArrow} alt="" />
            </button>
            <button
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 25, 370, 10);
              }}
              className="ml-4 lg:ml-8"
            >
              <img className="w-[55px]" src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Body;
