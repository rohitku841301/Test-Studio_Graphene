import React from "react";
import '../../public/index.css'

const Navbar = (props) => {
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <nav className="p-0 sm:p-4 ">
      <div className="backMenu mx-0 sm:mx-auto sm:container sm:bg-transparent">
        <ul className="flex flex-col items-center justify-center h-[80vh] text-[18px] font-sans font-semibold text-shopcart sm:flex-row sm:h-auto ">
          {navbar.map((item) => (
            <li
              key={item.id}
              className="py-[40px] relative group group-hover:border-b-1 sm:py-0"
            >
              <a
                href={`#${item.id}`}
                className="text-white  mx-[14px] lg:mx-[60px] md:mx-[40px]"
              >
                {item.name.toUpperCase()}
              </a>
              {item.child && (
                <ul className=" bg-black ml-14 w-32 text-[14px] text-white absolute hidden py-2 leading-5 group-hover:flex flex-col font-extralight border-[1px] border-white ">
                  {item.child.map((childItem) => (
                    <li key={childItem.id}>
                      <a
                        href={`#${childItem.id}`}
                        className="block px-3 py-1 text-white"
                      >
                        {childItem.name.toUpperCase()}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
