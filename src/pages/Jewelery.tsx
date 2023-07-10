import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import CategorizedHero from "../components/CategorizedHero";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Jewelery = (): JSX.Element => {
  const products = useContext(ProductContext);

  const filteredJeweleryProducts = products?.filter((item) => {
    return item.category === "jewelery";
  });

  return (
    <div>
      <CategorizedHero category="Jewelery" />
      <section className="py-16 border-b ">
        <div className="container mx-auto">
          {/* location nav */}
          <div className="pb-8 flex md:block">
            <nav className="mx-auto px-4">
              <ol className="flex items-center gap-1 text-sm text-gray-600">
                <li>
                  <Link to="/">
                    <AiOutlineHome />
                  </Link>
                </li>
                <li>
                  <BiChevronRight />
                </li>
                <li>Jewelery</li>
              </ol>
            </nav>
          </div>
          {/* displayed products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none mx-auto md:mx-0">
            {filteredJeweleryProducts?.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jewelery;
