import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";

const Sidebar = (): JSX.Element => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext)

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full md:w-[35vw] xl:max-w-[30vw] bg-white fixed top-0 h-full shadow-2xl transition-all duration-300 z-20 px-4 lg:px-[35px] `}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        {/* icon  */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div>{cart.map((item) =>{
        return <CartItem product={item} key={item.id}/>
      })}</div>
    </div>
  );
};

export default Sidebar;
