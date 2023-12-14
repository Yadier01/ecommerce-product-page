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
    <div className="relative flex justify-center   md:flex md:flex-col lg:h-96 lg:w-96">
      <img src={img} className="rounded-lg  lg:w-full" alt="" />
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
      <div className="md:flex gap-4  mt-8 hidden ">
        <img
          src="/image-product-1-thumbnail.jpg"
          alt=""
          className=" w-full border-2   rounded-lg  border-2 "
        />
        <img
          src="/image-product-2-thumbnail.jpg"
          alt=""
          className="w-full rounded-lg"
        />
        <img
          src="/image-product-3-thumbnail.jpg"
          alt=""
          className="w-full rounded-lg"
        />
        <img
          src="/image-product-4-thumbnail.jpg"
          alt=""
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};
