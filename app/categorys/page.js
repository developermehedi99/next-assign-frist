const Categorys = () => {
  return (
    <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
      <div class="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
        <button class="hover:border-b border-black block h-6 box-border mt-4">
          All
        </button>
        <button class="hover:border-b border-black block h-6 box-border mt-5">
          Smartphones
        </button>
        <button class="hover:border-b border-black block h-6 box-border mt-5">
          Laptops
        </button>
        <button class="hover:border-b border-black block h-6 box-border mt-5">
          Fragrances
        </button>
        <button class="hover:border-b border-black block h-6 box-border mt-5">
          Skincare
        </button>
        <button class="hover:border-b border-black block h-6 box-border mt-5">
          Groceries
        </button>
      </div>
      <div class="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
        {/* Product 1 Start -*/}

        <div>
          <div class="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform"></div>
          <h2 class="text-sm lg:text-base mt-2">
            <a class="text-base font-bold" href="./productPage.html">
              iPhone 9
            </a>
            <span class="text-[#919090]">
              <a href="./category.html">(Smartphones)</a>
            </span>
          </h2>
          <p class="text-[#919090] text-sm ">
            An apple mobile which is nothing like apple
          </p>

          <p class="text-rose-600 text-sm mt-4">
            <span class="text-[#919090] line-through">$205.00</span> $195.00
          </p>
        </div>
        {/* Product 1 End -*/}
      </div>
    </section>
  );
};

export default Categorys;
