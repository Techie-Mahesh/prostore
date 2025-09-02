import ProductList from "@/components/shared/Product/ProductList";
import { getLatestProducts } from "@/lib/actions/product.actions";

/* const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  }); */
const Homepage = async () => {
  const productsList = await getLatestProducts();
  // await delay(2000);
  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList title="Newest Arrivals" data={productsList} limit={6} />
    </div>
  );
};

export default Homepage;
