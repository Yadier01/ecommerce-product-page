export const Cart = ({
  itemInCart,
  totalItems,
  totalMoney,
  deleteHandler,
  cartActive,
  className,
}: any) => {
  return (
    <>
      {cartActive && (
        <div
          className={` absolute lg:w-96    rounded-lg transition-all ease-in-out   bg-white w-11/12   mx-8 h-content pb-4  z-10 ${className} `}
        >
          <div className=" bg-white lg:w-full">
            <div className="p-6 h-1/4 ">
              <p>Cart</p>
            </div>
            {itemInCart && itemInCart.length > 0 ? (
              itemInCart.map((e: any) => (
                <div
                  key={e.id}
                  className="px-6 flex items-center justify-between "
                >
                  <div className="flex gap-3 col pl-4">
                    <img src={e.img} alt="image" className="h-16 rounded-md " />
                    <div className="flex flex-col ">
                      <p className="text-gray-500 font-semibold">{e.name}</p>
                      <span className="flex gap-1">
                        <p className="text-gray-500">${e.price}</p>
                        <span className="text-gray-500">x</span>
                        <span className="text-gray-500">{totalItems}</span>
                        <p className="font-bold">${totalMoney}</p>
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteHandler(e.id, e.name, e.price, e.img)}
                  >
                    <img src="/icon-delete.svg" alt="" />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center">
                <p>no item in cart :( </p>
              </div>
            )}
            <div className=" my-5 border-b w-full"></div>

            <div className="p-4  h-full  ">
              <button
                className={`text-white w-full p-3   bg-[#ff7d1b] transition-all gap-4  rounded-lg flex items-center justify-center  
                    `}
              >
                <p className="font-bold">Checkout</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
