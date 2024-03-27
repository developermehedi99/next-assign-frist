import Image from "next/image";
import Link from "next/link";
import allProducts from "../data/allPorducts";

const CategoryPage = () => {
  return (
    <div>
      <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {allProducts.map((product) => (
            <div key={product.id}>
              <Image
                width={270}
                height={310}
                src={product.thumbnail}
                alt="img"
                class="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform"
              ></Image>
              <h2 class="text-sm lg:text-base mt-2">
                <Link
                  href={`/products/${product.id}`}
                  class="text-base font-bold"
                >
                  {product.title}
                </Link>
                <span class="text-[#919090]">
                  <Link href={`/category/${product.category}`}>
                    ({product.category})
                  </Link>
                </span>
              </h2>
              <p class="text-[#919090] text-sm">{product.description}</p>
              <p class="text-rose-600 text-sm mt-4">
                <span class="text-[#919090] line-through">
                  ${product.price}
                </span>{" "}
                ${product.discountPercentage}
              </p>{" "}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
