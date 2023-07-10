import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import ClipLoader from "react-spinners/ClipLoader";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Product from "../components/Product";
import SliderCard from "../components/SliderCard";

const ProductDetails = (): JSX.Element => {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products?.find((item) => {
    return item.id === Number(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center ">
        <ClipLoader color={"red"} />
      </section>
    );
  }

  const otherProducts = products?.filter((item) => {
    return item.id !== Number(id) && item.category !== "electronics";
  });

  const { title, price, description, image, category } = product;

  return (
    <div className="flex flex-col pt-32 pb-12 lg:py-32  gap-28">
      {/* location nav */}
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
          <li>
            {category === "men's clothing" ? (
              <Link to="/men">{category}</Link>
            ) : category === "women's clothing" ? (
              <Link to="/women">{category}</Link>
            ) : category === "jewelery" ? (
              <Link to="/jewelery">{category}</Link>
            ) : (
              <span>{category}</span>
            )}
          </li>
          <li>
            <BiChevronRight />
          </li>
          <li>{title}</li>
        </ol>
      </nav>
      {/* product section */}
      <section className="flex items-center">
        <div className="container mx-auto">
          {/* image and text wrapper */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* image */}
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-w-[200px] lg:max-w-sm"
                src={image}
                alt={title}
              />
            </div>
            {/* text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-2-[450px] mx-auto lg:mx-0">
                {title}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                {price} zł
              </div>
              <p className="mb-8 ">{description}</p>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-red-500 hover:bg-red-400 transition py-6 px-8 text-white rounded-full"
              >
                Add to cart
              </button>
            </div>
          </div>
          {/* SLIDER */}
          <div className="mt-32"></div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
