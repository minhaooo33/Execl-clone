import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />        {/* 所有頁面都會出現 */}
      <main className="min-h-screen">
        <Outlet />      {/* 將當前頁面插進來 */}
      </main>
      {/* <Footer />        之後加共用頁腳 */}
    </>
  );
}