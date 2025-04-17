import React, { useContext } from "react";
import { X, Trash2} from "lucide-react";
import BlueBtn from "../../ui/BlueBtn";
import ModalContainer from "./ModalContainer";
import UserProgressContext from "../../store/UserProgressContext";
import CartContext from "../../store/CartContext";

export default function CartModal() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);
  const cart = cartCtx.items;
  const calculateTotal = cart.reduce((sum, item) => {
    const priceNum = parseFloat(item.originalPrice);
    return sum + (isNaN(priceNum) ? 0 : priceNum) * item.quantity;
  }, 0);
  
  console.log("Cart items:", cart);
  function handleClose() {
    userProgressCtx.hideCart();
  }

  function handleCheckout() {
    userProgressCtx.hideCart();
  }

  function handleIncrement(item) {
    cartCtx.addItem(item);
  }

  function handleDecrement(itemId) {
    cartCtx.decrementItem(itemId);
  }

  function handleRemove(itemId) {
        cartCtx.removeItem(itemId);
      }

  return (
    <ModalContainer 
      open={userProgressCtx.progress === "cart"} 
      onClose={userProgressCtx.progress === "cart" ? handleClose : null}
      className="cart-modal"
    >
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">您的購物車</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {cart.map((item) => (
            <div key={item.id} className=" items-center py-4 border-b border-gray-100">

              <div className="grid grid-cols-3 items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md shadow-sm justify-self-start"
                />
                <h3 className="text-sm text-sky-950 justify-self-center">{item.name}</h3>
                <p className="justify-self-end">$ {item.originalPrice}</p>
              </div>

                <div className="mt-2 flex items-center  justify-self-center  space-x-3">
                  <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                    <button onClick={() => handleDecrement(item.id)} className="text-gray-600">-</button>
                    <span className="text-gray-700">{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)} className="text-gray-600">+</button>
                  </div>
                  <button onClick={() => handleRemove(item.id)} className="text-gray-400 hover:text-gray-600">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
          ))}
        </div> {/* end of scrollable items */}
        <div className="sticky bottom-0 bg-white pt-4 border-t">
          <div className="flex justify-between items-center mb-1">
            <div>
              <p className="text-gray-700 font-medium">估計總金額</p>
              <p className="text-gray-400 text-xs">結帳時計算運費。</p>
            </div>
            <div className="text-gray-900 text-lg font-bold">$ {calculateTotal} TWD</div>
          </div>
          <BlueBtn className="w-full py-3 text-lg rounded-full bg-blue-800 hover:bg-blue-700 text-white" onClick={handleCheckout}>
            結帳
          </BlueBtn>
        </div>
      </div>
    </ModalContainer>
  );
}