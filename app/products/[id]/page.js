import allProducts from "@/app/data/allPorducts";
import Image from "next/image";
import Link from "next/link";

const Details = ({ params }) => {
  console.log(params);
  const { id } = params;
  const product = allProducts.find((product) => product.id === +id);
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    thumbnail,
    images,
    category,
  } = product;

  return (
    <div>
      <main class="h-screen">
        <section class="bg-[#fafaf2] h-full py-20">
          <div class="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
            <div class="w-full lg:w-7/12 border border-slate-500/20 p-4">
              <Image
                width={400}
                height={500}
                src={thumbnail}
                class="w-[400px] h-[500px] mx-auto object-cover"
                alt=""
              />

              <div class="flex gap-4 mt-4">
                {images.map((image) => (
                  <Image
                    key={image}
                    width={100}
                    height={100}
                    src={image}
                    class="w-[100px] h-[100px] mx-auto border object-cover"
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div class="w-full lg:w-5/12">
              <h1 class="italic text-xl lg:text-3xl font-serif font-semibold">
                {title}
              </h1>
              <span class="text-[#919090] my-3">
                <Link href={`/categorys/${category}`}>({category})</Link>
              </span>{" "}
              <div class="mt-3 flex items-center justify-start gap-1">
                <Image
                  src="/assets/svg/star.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <Image
                  src="/assets/svg/star.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <Image
                  src="/assets/svg/star.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <Image
                  src="/assets/svg/star.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <Image
                  src="/assets/svg/star.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <hr class="my-5 bg-black" />
              <div>
                <p class="my-3">
                  <span class="text-rose-600 opacity-60 line-through">
                    ${price}
                  </span>
                  <span class="font-bold text-2xl">${discountPercentage}</span>
                </p>
              </div>
              <div>
                <p class="leading-7">{description}</p>

                <button class="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                  Add To Cart - ${discountPercentage}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Details;
