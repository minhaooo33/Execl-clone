import React, { useState, useEffect, useContext, createContext } from "react";
import { ShoppingCart, Search ,AlignJustify} from "lucide-react"; 
import placeholderLogo from "../assets/logo-placeholder.png"; 
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const userProgressCtx = useContext(UserProgressContext)
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) =>{
    return totalNumberOfItems + item.quantity;
},0)

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleShowCart(){
    userProgressCtx.showCart();
  }

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-transparent shadow-none' : 'bg-white shadow'}`}>
      <div className="w-full px-4 py-3 flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <AlignJustify className="pl-1 text-gray-600 hover:text-orange-500 cursor-pointer" />
        </div>

        <div className="flex items-center space-x-2">
          <img src={placeholderLogo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-600 hover:text-orange-500 transition"
            aria-label="Search"
          >
            <Search className="w-6 h-6" />
          </button>

          <button
            className="relative text-gray-600 hover:text-orange-500 transition"
            aria-label="Cart"
          >
          <ShoppingCart className="w-6 h-6" 
          onClick={handleShowCart}/>
          {totalCartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-sky-950 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalCartItems}
            </span>
          )}
           
            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span> */}
          </button>
        </div>
      </div>
    </header>
  );
}