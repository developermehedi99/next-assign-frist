import allProducts from "@/app/data/allPorducts";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }) => {
  const { category } = params;
  const categoryPage = allProducts.filter(
    (product) => product.category === category
  );

  return (
    <div className="sticky top-0 right-0 w-full lg:w-10/12  my-4 lg:my-10">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {categoryPage.map((item) => (
          <div key={item.id}>
            <div className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform">
              <Image
                src={item.thumbnail}
                width={310}
                height={205}
                alt="image"
              ></Image>
            </div>
            <h2 className="text-sm lg:text-base mt-2">
              <Link className="text-base font-bold" href="">
                {item.title}
              </Link>
              <span className="text-[#919090]">
                <a href="">({item.category})</a>
              </span>
            </h2>
            <p className="text-[#919090] text-sm ">{item.description}</p>

            <p className="text-rose-600 text-sm mt-4">
              <span className="text-[#919090] line-through">${item.price}</span>{" "}
              ${item.discountPercentage}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
