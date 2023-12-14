import { useEffect, useState } from "react";
import data from "../src/data.json";
import { Header } from "./components/Header";
import { ItemImg } from "./components/ItemImg";
import { ItemContent } from "./components/ItemContent";

function App() {
  const imageMap = data.length > 0 ? data[0].img : [];
  const [currentImg, setCurrentImg] = useState(0);
  const [img, setImg] = useState(imageMap[currentImg]);
  const [itemsQuantity, setItemsQuantity] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [cartActive, setCartActive] = useState(false);
  const [itemInCart, setItemInCart] = useState<any>([]);

  const cartActiveHandler = () => {
    setCartActive((prev) => !prev);
    console.log(cartActive);
  };

  useEffect(() => {
    setImg(imageMap[currentImg]);
  }, [currentImg, imageMap]);

  const deleteHandler = (id: number) => {
    const deletedItems = itemInCart.filter((item: any) => item.id !== id);
    setItemInCart(deletedItems);
    setTotalItems(0);
  };
  useEffect(() => {
    console.log(itemInCart && itemInCart.length, itemInCart);
  }, [deleteHandler]);
  const imageChange = (imgIdx: any) => {
    if (imgIdx < 0) {
      imgIdx = imageMap.length - 1;
    } else if (imgIdx >= imageMap.length) {
      imgIdx = 0;
    }
    setCurrentImg(imgIdx);
  };

  const nextImageHandler = () => {
    imageChange(currentImg + 1);
  };

  const beforeImageHandler = () => {
    imageChange(currentImg - 1);
  };

  const addOneItemHandler = () => {
    setItemsQuantity((prev) => prev + 1);
  };

  const subtractOneItemHandler = () => {
    if (itemsQuantity < 1) return;
    setItemsQuantity((prev) => prev - 1);
  };
  const itemToCartHandler = (
    id: number,
    name: string,
    price: number,
    img: string
  ) => {
    if (itemsQuantity < 1) return;
    const existingItem = itemInCart.find((item: any) => item.id === id);

    if (existingItem) {
      //updates quantity if item exists in cart
      const updatedCart = itemInCart.map((item: any) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + itemsQuantity };
        }
        return item;
      });

      setItemInCart(updatedCart);
    } else {
      setItemInCart([
        ...itemInCart,
        { id, name, price, img, quantity: itemsQuantity },
      ]);
    }

    setTotalItems((prevTotalItems) => prevTotalItems + itemsQuantity);
  };

  const totalMoney = 125.0 * itemsQuantity;

  return (
    <>
      <Header
        cartActive={cartActive}
        cartActiveHandler={cartActiveHandler}
        totalItems={totalItems}
        itemInCart={itemInCart}
        deleteHandler={deleteHandler}
        totalMoney={totalMoney}
      />
      <main className=" flex justify-center ">
        <div className="md:w-5/6  md:h-5/6 lg:flex flex-col lg:flex-row justify-center flex lg:w-screen  lg:h-full items-center lg:p-28  ">
          <ItemImg
            cartActive={cartActive}
            img={img}
            itemInCart={itemInCart}
            totalItems={totalItems}
            deleteHandler={deleteHandler}
            totalMoney={totalMoney}
            beforeImageHandler={beforeImageHandler}
            nextImageHandler={nextImageHandler}
          />
          <ItemContent
            data={data}
            subtractOneItemHandler={subtractOneItemHandler}
            itemsQuantity={itemsQuantity}
            addOneItemHandler={addOneItemHandler}
            itemToCartHandler={itemToCartHandler}
            img={img}
          />
        </div>
      </main>
    </>
  );
}

export default App;
