import { useState } from "react";
import FooterContainer from "../container/contentInfo.jsx";
import ProductSlider from "../container/ProductSlider.jsx";
import BannerLogo from "../components/BannerCom/BannerLogo.jsx";
import BannerBasket from "../components/BannerCom/BannerBasket.jsx";
import ListItem from "../container/NavItem.jsx";
import ComputerData from "../data/Computers.jsx";
import ProductContainer from "../components/ProductComponents.jsx";

function ComputerPage() {
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
        {ComputerData.filter((computer) => {
          return search.toLowerCase() === ""
            ? computer
            : computer.model.toLowerCase().includes(search);
        }).map((computer) => (
          <ProductContainer
            key={computer.id}
            img={computer.img}
            model={computer.model}
            description={computer.description}
            price={computer.price}
          />
        ))}
      </section>
      <FooterContainer />
    </>
  );
}

export default ComputerPage;
