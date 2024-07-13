import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutUs from "./pages/about-us";
import DigitalServiceAmex from "./pages/digital-service-amex";
import ECommerceMarketPlace from "./pages/e-commerce-market-place";
import ImportedFoodSourcing from "./pages/imported-food-sourcing";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Agribbee";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/digital-service-amex":
        title = "";
        metaDescription = "";
        break;
      case "/ecommercemarketplace":
        title = "";
        metaDescription = "";
        break;
      case "/importedfoodsourcing":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/digital-service-amex" element={<DigitalServiceAmex />} />
      <Route path="/ecommercemarketplace" element={<ECommerceMarketPlace />} />
      <Route path="/importedfoodsourcing" element={<ImportedFoodSourcing />} />
    </Routes>
  );
}
export default App;
