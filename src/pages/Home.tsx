import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Hero from "../components/Hero";
import Product from "../components/Product";

const Home = (): JSX.Element => {
  const products = useContext(ProductContext);

  // getting only men's and women's clothing
  const filteredProducts = products?.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "women's clothing" ||
      item.category === "jewelery"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16 border-b">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none mx-auto md:mx-0">
            {filteredProducts?.map((item) => {
              return <Product product={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
