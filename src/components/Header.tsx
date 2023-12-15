import { useState } from "react";
import { SideBar } from "./SideBar";
import { Cart } from "./Cart";

export const Header = ({
  cartActiveHandler,
  totalItems,
  itemInCart,
  deleteHandler,
  totalMoney,
  cartActive,
}: any) => {
  const [sidebarOn, setSidebarOn] = useState(false);

  const sidebarHandler = () => {
    setSidebarOn((prev) => !prev);
  };
  return (
    <header className="flex items-center  p-10 -20  lg:border-b lg:mx-40 justify-between ">
      {sidebarOn && (
        <SideBar sidebarHandler={sidebarHandler} sidebarOn={sidebarOn} />
      )}

      <div className="flex gap-5 lg:hidden ">
        <button onClick={() => sidebarHandler()}>
          <img src="/icon-menu.svg" alt="" className=" h-7" />
        </button>
      </div>
      <div className="lg:flex items-center h-full gap-4 hidden">
        <img src="/logo.svg" alt="" className="h-6 mr-10" />
        <div className="h-full flex  justify-center items-center">
          <ul className="flex gap-4 font-bold h-full justify-center items-center ">
            <li className="hover:border-b h-full flex items-center   hover:border-[#ff7d1b] ">
              <span>Collection</span>
            </li>
            <li className="hover:border-b   h-full flex items-center  hover:border-[#ff7d1b] ">
              {" "}
              <span>Men</span>
            </li>
            <li className="hover:border-b   h-full flex items-center  hover:border-[#ff7d1b] ">
              <span>Women</span>
            </li>
            <li className="hover:border-b   h-full flex items-center  hover:border-[#ff7d1b] ">
              <span>About</span>
            </li>
            <li className="hover:border-b   h-full flex items-center  hover:border-[#ff7d1b] ">
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex relative  gap-5 items-center">
        <button className="relative" onClick={cartActiveHandler}>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 w-5  text-[] text-white  rounded-lg   bg-[#ff7d1b] ">
              {totalItems}
            </span>
          )}
          <img src="/icon-cart.svg" alt="" className="h-7" />
        </button>
        <Cart
          cartActive={cartActive}
          itemInCart={itemInCart}
          totalItems={totalItems}
          deleteHandler={deleteHandler}
          totalMoney={totalMoney}
          className={"hidden lg:flex top-16  -right-20 shadow-lg "}
        />
        <img src="/image-avatar.png" alt="" className="h-9" />
      </div>
    </header>
  );
};
