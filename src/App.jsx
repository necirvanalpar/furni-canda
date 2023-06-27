import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Footer/Blog/Blog"

import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";

import AppContext from "./utils/context";

function App() {
  return (
    <BrowserRouter>
    <AppContext>
      
    </AppContext>
      <Header />

      <Routes>
        {/* Shop Page */}
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<SingleProduct />} />

        {/* Business Page */}
      </Routes>

      <Blog />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
