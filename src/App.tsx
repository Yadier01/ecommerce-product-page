function App() {
  return (
    <>
      <header className="flex items-center  p-4 h-16 bg-red-400 justify-between">
        <div className="flex gap-5 ">
          <button>
            <img src="/icon-menu.svg" alt="" className=" h-7" />
          </button>
          <img src="/logo.svg" alt="" className="h-6" />
        </div>
        <div className="flex  gap-5 items-center">
          <img src="/icon-cart.svg" alt="" className="h-7" />
          <img src="/image-avatar.png" alt="" className="h-9" />
        </div>
      </header>
      <main>
        <img src="/image-product-1.jpg" alt="" />
        <div className="p-4">
          <h4 className="text-yellow-500 font-bold">SNEAKER COMPANY</h4>
          <h2 className="text-2xl font-bold">Fall Limited Edition Sneakers</h2>
        </div>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Feauturing a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>
      </main>
    </>
  );
}

export default App;
