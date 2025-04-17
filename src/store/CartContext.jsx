import { createContext,useReducer } from "react"

// 建立 Context，定義購物車的基本功能
const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    decrementItem: (id) => {},
    removeItem: (id) => {},
    clearCart: () => {}
})

//  定義購物車的 reducer function
function cartReducer(state, action) {
    if(action.type === "ADD_ITEM"){
        // 找尋 item 是否已經存在於購物車
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        // 複製舊的 items 陣列，避免直接修改 state
        const updatedItems = [...state.items] ;

        if(existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity:existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem
        }else{
            updatedItems.push({...action.item, quantity:1});
        }
        
        return {...state, items: updatedItems };//不想更改現有狀態 方便未來添加其他數據
    }

    if(action.type === "DECREMENT_ITEM") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];

        if(existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex , 1);
        }else{
            const updatedItem = { 
                ...existingCartItem,
                quantity:existingCartItem.quantity - 1,
            }
            updatedItems[existingCartItemIndex] = updatedItem; 
        }

        return {...state, items: updatedItems };
    }
    
    if(action.type === "REMOVE_PRODUCT") {
        const filteredItems = state.items.filter(item => item.id !== action.id);
        return { ...state, items: filteredItems };
    }

    if(action.type === "CLEAR_CART"){
        return {...state,items: [] };
    }

    return state;
}
//Context Provider購物車功能
export function CartContextProvider({children}){
    const [ cart, dispatchCartAction ] = useReducer(cartReducer, {items:[]});

    function addItem (item) {
        dispatchCartAction({ type: "ADD_ITEM" , item:item});
    }

    function decrementItem(id) {
        dispatchCartAction({ type: "DECREMENT_ITEM", id:id })
    }

    function removeItem(id) {
        dispatchCartAction({ type: "REMOVE_PRODUCT", id:id })
    }

function clearCart(){
    dispatchCartAction({ type: "CLEAR_CART" })
}

    const cartContext = {
        items: cart.items,
        addItem,
        decrementItem,
        removeItem,
        clearCart
    }


    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}
//匯出 CartContext，讓其他元件可用 useContext(CartContext)
export default CartContext