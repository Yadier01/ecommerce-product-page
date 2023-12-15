import { Cart } from "./Cart";

export const ItemImg = ({
  cartActive,
  img,
  itemInCart,
  totalItems,
  deleteHandler,
  totalMoney,
  beforeImageHandler,
  nextImageHandler,
}: any) => {
  return (
    <div className="relative flex justify-center  lg:justify-normal md:flex-col lg:h-96 lg:w-[30rem]">
      <div className="w-full">
        <Cart
          cartActive={cartActive}
          itemInCart={itemInCart}
          totalItems={totalItems}
          deleteHandler={deleteHandler}
          totalMoney={totalMoney}
          className={"lg:hidden "}
        />
        <button
          onClick={beforeImageHandler}
          className="p-3   absolute top-44 left-5  rounded-full  bg-white   "
        >
          <img src="/icon-previous.svg" alt="" className=" w-4 h-4 " />
        </button>

        <button
          onClick={nextImageHandler}
          className="p-3   absolute top-44 right-5  rounded-full  bg-white   "
        >
          <img src="/icon-next.svg" alt="" className=" w-4  h-4" />
        </button>

        <div className=" flex-col gap-4  w-full mt-8 flex   ">
          <img src={img} className="rounded-lg   " alt="" />
          <div className="md:flex justify-between w-full hidden ">
            <img
              src="/image-product-1-thumbnail.jpg"
              alt=""
              className=" w-1/5 h-1/5    rounded-lg  border-2 "
            />
            <img
              src="/image-product-2-thumbnail.jpg"
              alt=""
              className=" w-1/5 h-1/5 rounded-lg"
            />
            <img
              src="/image-product-3-thumbnail.jpg"
              alt=""
              className="w-1/5 h-1/5 rounded-lg"
            />
            <img
              src="/image-product-4-thumbnail.jpg"
              alt=""
              className=" w-1/5 h-1/5 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
