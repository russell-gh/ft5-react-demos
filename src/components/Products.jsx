import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  console.log(id);

  return <p>Products!</p>;
};

export default Products;
