import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
// import { CartContext } from "../contexts/CartContext";

const Header = (): JSX.Element => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)}>open/close sidebar</div>
    </header>
  );
};

export default Header;
