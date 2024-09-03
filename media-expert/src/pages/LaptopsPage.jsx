import { useState } from "react";
import FooterContainer from "../container/contentInfo.jsx";
import ProductSlider from "../container/ProductSlider.jsx";
import BannerLogo from "../components/BannerCom/BannerLogo.jsx";
import BannerBasket from "../components/BannerCom/BannerBasket.jsx";
import ListItem from "../container/NavItem.jsx";
import LaptopData from "../data/Laptops.jsx";
import ProductContainer from "../components/ProductComponents.jsx";

function LaptopPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <header role="banner">
        <BannerLogo />
        <div id="search-container">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Wyszukaj w sklepie"
          />
          <div id="icon-search-con">
            <img
              src="/src/assets/images/loupe (1).png"
              id="search-icon"
              alt="logo wyszukiwania"
            />
          </div>
        </div>
        <BannerBasket />
      </header>
      <ProductSlider />
      <ListItem />
      <section role="menubar" id="ProductsSection">
        {LaptopData.filter((laptop) => {
          return search.toLowerCase() === ""
            ? laptop
            : laptop.model.toLowerCase().includes(search);
        }).map((laptop) => (
          <ProductContainer
            key={laptop.id}
            img={laptop.img}
            model={laptop.model}
            description={laptop.description}
            price={laptop.price}
          />
        ))}
      </section>
      <FooterContainer />
    </>
  );
}

export default LaptopPage;
