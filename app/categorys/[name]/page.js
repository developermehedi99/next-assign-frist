import allProducts from "@/app/data/allPorducts";

const DynamicCategory = () => {
  const menu = allProducts;
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  return <div></div>;
};

export default DynamicCategory;
