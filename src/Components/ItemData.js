import arrowBlack from "../../public/Images/arrowBlack.svg";

const ItemData = (props) => {
  const { image, title, description, price } = props?.itemData;
  //   console.log(props);

  return (
    <div className="p-4 m-4 hover:border-2 border-black">
    <div className="w-[310px] h-[100%] cursor-pointer ">
      <div className="w-[310px] h-[322px] relative">
        <img className="w-[310px] h-[322px]" src={image} alt="item" />
        <img className="absolute bottom-0 right-0 w-[45px] h-[45px]" src={arrowBlack} alt="" />
      </div>
      <div className="p-2">
        <h2 className="text-syne text-[26px] font-semibold text-itemTitle leading-[31.2px]">
          {title}
        </h2>
        <p className="text-sm font-sans text-itemPara">
          {description.slice(0, 100)}
        </p>
        <h4 className="text-[26px] text-syne text-itemTitle">${price}</h4>
      </div>
    </div>
    </div>
  );
};

export default ItemData;
