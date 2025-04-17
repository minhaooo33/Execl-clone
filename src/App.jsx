import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CartModal from "./components/modalContainer/CartModal";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    <CartModal />
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
