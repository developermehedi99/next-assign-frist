import Image from "next/image";

const DetailsProducts = () => {
  return (
    <div>
      {/* Navbar Start  */}
      <nav class="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
        <div class="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
          <div class="flex items-center gap-2">
            <Image
              src="./assets/svg/menu.svg"
              class="lg:hidden w-5 h-5"
              alt=""
            />
            <a href="./index.html">
              <Image src="./assets/lws-logo-black.svg" class="h-10" alt="" />
            </a>
          </div>
        </div>
        <div class="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
          <Image
            src="./assets/svg/avatar.svg"
            class="hidden lg:block w-[18px] h-[18px]"
            alt="login acount avatar"
          />
          <Image
            src="./assets/svg/shopping-Cart.svg"
            class="block w-5 h-5"
            alt="shopping cart icon"
          />
        </div>
      </nav>
      {/* Navbar END  */}

      <main class="h-screen">
        <section class="bg-[#fafaf2] h-full py-20">
          <div class="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
            <div class="w-full lg:w-7/12 border border-slate-500/20 p-4">
              <Image
                src="./assets/products/iphone.jpg"
                class="w-[400px] h-[500px] mx-auto object-cover"
                alt=""
              />

              <div class="flex gap-4 mt-4">
                <Image
                  src="./assets/products/iphone.jpg"
                  class="w-[100px] h-[100px] mx-auto border object-cover"
                  alt=""
                />
                <Image
                  src="./assets/products/iphone-2.jpg"
                  class="w-[100px] h-[100px] mx-auto border object-cover"
                  alt=""
                />
                <Image
                  src="./assets/products/iphone-3.jpg"
                  class="w-[100px] h-[100px] mx-auto border object-cover"
                  alt=""
                />
                <Image
                  src="./assets/products/iphone-4.jpg"
                  class="w-[100px] h-[100px] mx-auto border object-cover"
                  alt=""
                />
              </div>
            </div>
            <div class="w-full lg:w-5/12">
              <h1 class="italic text-xl lg:text-3xl font-serif font-semibold">
                iPhone 9
              </h1>
              <span class="text-[#919090] my-3">Smartphone</span>
              <div class="mt-3 flex items-center justify-start gap-1">
                <Image src="./assets/svg/star.svg" width="20px" alt="" />
                <Image src="./assets/svg/star.svg" width="20px" alt="" />
                <Image src="./assets/svg/star.svg" width="20px" alt="" />
                <Image src="./assets/svg/star.svg" width="20px" alt="" />
                <Image src="./assets/svg/star.svg" width="20px" alt="" />
              </div>
              <hr class="my-5 bg-black" />

              <div>
                <p class="my-3">
                  <span class="text-rose-600 opacity-60 line-through">
                    $205.00
                  </span>
                  <span class="font-bold text-2xl">$195.00</span>
                </p>
              </div>
              <div>
                <p class="leading-7">
                  Enhance your dining space with this sleek, contemporary dining
                  table, crafted from high-quality solid wood with a warm
                  finish. Its sturdy construction and minimalist design make it
                  a perfect addition for any home looking for a touch of
                  elegance. Accommodates up to six guests comfortably and
                  includes a striking fruit bowl centerpiece. The overhead
                  lighting is not included.
                </p>

                <button class="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                  Add To Cart - $195
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DetailsProducts;
