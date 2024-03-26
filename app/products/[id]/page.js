import allProducts from "@/app/data/allPorducts";

const Details = ({ params }) => {
  const { id } = params;
  const product = allProducts.find((product) => product.id === id);
  //   const { title, description } = product;
  console.log(product);
  return (
    <div>
      {/* <h1>{title}</h1>
      <p>{description}</p> */}
    </div>
  );
};

export default Details;
