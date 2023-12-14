/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import ProductList from "./ProductList";
import { createProduct } from "./createProduct";
import Filter from "./Filter";
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy";

function Product() {
  const [searchParams] = useSearchParams();
  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: createProduct,
  });
  console.log(isLoading, products);

  if (isLoading) return <p>Please Wait ...🫸</p>;

  const filteredValue = searchParams.get("category") || "all";

  //FILTERING
  let filteredProduct;

  if (filteredValue === "all") {
    filteredProduct = products;
  }

  if (filteredValue === "womens-clothing") {
    filteredProduct = products.filter(
      (product) => product.category === "women's clothing"
    );
  }
  if (filteredValue === "mens-clothing") {
    filteredProduct = products.filter(
      (product) => product.category === "men's clothing"
    );
  }
  if (filteredValue === "electronics") {
    filteredProduct = products.filter(
      (product) => product.category === "electronics"
    );
  }

  //SORTING

  const sortByRaw = searchParams.get("sortBy") || "price-asc";
  const [field, directions] = sortByRaw.split("-");
  let modifier = directions === "asc" ? 1 : -1;

  let sortByProduct;

  console.log(field, directions);
  sortByProduct =
    field === "price"
      ? filteredProduct.sort((a, b) => (a[field] - b[field]) * modifier)
      : filteredProduct.sort(
          (a, b) => (a[field].rate - b[field].rate) * modifier
        );

  console.log(sortByProduct);

  return (
    <div>
      <Filter
        filter="category"
        options={[
          { value: "all", label: "All" },
          { value: "womens-clothing", label: "Women's clothing" },
          { value: "mens-clothing", label: "Men's clothing" },
          { value: "electronics", label: "Electronics" },
        ]}
      />
      <SortBy />
      <ProductList products={sortByProduct} />
    </div>
  );
}

export default Product;