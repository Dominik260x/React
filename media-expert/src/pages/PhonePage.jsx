import { useState } from "react";
import FooterContainer from "../container/contentInfo.jsx";
import ProductSlider from "../container/ProductSlider.jsx";
import BannerLogo from "../components/BannerCom/BannerLogo.jsx";
import BannerBasket from "../components/BannerCom/BannerBasket.jsx";
import ListItem from "../container/NavItem.jsx";
import PhoneData from "../data/Phones.jsx";
import ProductContainer from "../components/ProductComponents.jsx";

const PhonePage = () => {
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
      <ListItem />
      <section role="menubar" id="ProductsSection">
        {PhoneData.filter((phone) => {
          return search.toLowerCase() === ""
            ? phone
            : phone.model.toLowerCase().includes(search);
        }).map((phone) => (
          <ProductContainer
            key={phone.id}
            img={phone.img}
            model={phone.model}
            description={phone.description}
            price={phone.price}
          />
        ))}
      </section>
      <ProductSlider />
      <FooterContainer />
    </>
  );
};

export default PhonePage;
