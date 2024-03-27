import allProducts from "@/app/data/allPorducts";

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
            <div className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform"></div>
            <h2 className="text-sm lg:text-base mt-2">
              <a className="text-base font-bold" href="./productPage.html">
                iPhone 9
              </a>
              <span className="text-[#919090]">
                <a href="./category.html">(Smartphones)</a>
              </span>
            </h2>
            <p className="text-[#919090] text-sm ">
              An apple mobile which is nothing like apple
            </p>

            <p className="text-rose-600 text-sm mt-4">
              <span className="text-[#919090] line-through">$205.00</span>{" "}
              $195.00
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
