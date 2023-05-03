import { CommonProvider } from "./contexts/common/commonContext";
import { CartProvider } from "./contexts/cart/cartContext";
import Header from "./components/common/Header";
import RouterRoutes from "./routes/RouterRoutes";
import Footer from "./components/common/Footer";
import BackTop from "./components/common/BackTop";
import { FiltersProvider } from "./contexts/filters/filtersContext";
import Header1 from "./components/common/Header1";
import Navbar from "./components/common/Navbar";

const App = () => {
  return (
    <>
      <CommonProvider>
        <FiltersProvider>
          <CartProvider>
            <Header1/>
            <Header />
            <Navbar/>
            <RouterRoutes />
            <Footer />
            <BackTop />
          </CartProvider>
        </FiltersProvider>
      </CommonProvider>
    </>
  );
};

export default App;
