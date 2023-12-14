export const ItemContent = ({
  data,
  subtractOneItemHandler,
  itemsQuantity,
  addOneItemHandler,
  itemToCartHandler,
  img,
}: any) => {
  return (
    <div className="lg:w-[30rem] lg:ml-20">
      {data.map((item: any) => (
        <span key={item.id} className="">
          <div className="p-4 ">
            <section className="flex flex-col gap-3 w-full">
              <h4 className=" text-[#ff7d1b]  text-sm   font-bold">
                SNEAKER COMPANY
              </h4>
              <h1 className="text-2xl lg:text-4xl font-bold">
                {item.itemName}
              </h1>

              <p className="text-gray-500  ">{item.description}</p>
            </section>
            <div className="flex justify-between lg:flex-col my-4">
              <div className="flex   items-center gap-4">
                <p className="font-bold text-2xl lg:text-3xl"> ${item.cost}</p>
                <span className="bg-orange-300/50 text-orange-600 font-semibold px-2 py-0.5 text-sm text-sm rounded-lg  ">
                  {item.porcentOff}%
                </span>
              </div>
              <p className=" line-through  text-gray-500 font-semibold">
                ${item.costWas}
              </p>
            </div>
            <span className="w-full flex flex-col  lg:flex-row lg:items-center gap-4 ">
              <div className=" bg-gray-100 p-3 w-full lg:w-1/3 flex font-bold rounded-lg">
                <button
                  onClick={subtractOneItemHandler}
                  className="w-full text-[#ff7d1b] text-xl"
                >
                  -
                </button>
                <span className=" text-center w-full">{itemsQuantity}</span>
                <button
                  onClick={addOneItemHandler}
                  className=" w-full text-[#ff7d1b]  text-xl"
                >
                  +
                </button>
              </div>
              <button
                onClick={() =>
                  itemToCartHandler(item.id, item.itemName, item.cost, img)
                }
                className={`text-white transition-all gap-4 p-4 lg:w-full rounded-lg flex items-center justify-center  ${
                  itemsQuantity === 0 ? "bg-orange-300" : "bg-[#ff7d1b] "
                }  `}
              >
                <img src="/icon-cart.svg" alt="" />
                <p className="font-bold">Add to cart</p>
              </button>
            </span>
          </div>
        </span>
      ))}
    </div>
  );
};
