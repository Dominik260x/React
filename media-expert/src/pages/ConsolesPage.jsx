import { useState } from "react";
import FooterContainer from "../container/contentInfo.jsx";
import ProductSlider from "../container/ProductSlider.jsx";
import BannerLogo from "../components/BannerCom/BannerLogo.jsx";
import BannerBasket from "../components/BannerCom/BannerBasket.jsx";
import ListItem from "../container/NavItem.jsx";
import ConsoleData from "../data/Consoles.jsx";
import ProductContainer from "../components/ProductComponents.jsx";

function ConsolePage() {
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
        {ConsoleData.filter((console) => {
          return search.toLowerCase() === ""
            ? console
            : console.model.toLowerCase().includes(search);
        }).map((console) => (
          <ProductContainer
            key={console.id}
            img={console.img}
            model={console.model}
            description={console.description}
            price={console.price}
          />
        ))}
      </section>
      <FooterContainer />
    </>
  );
}

export default ConsolePage;
