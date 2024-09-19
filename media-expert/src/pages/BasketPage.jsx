import { useState } from "react";
import FooterContainer from "../container/contentInfo.jsx";
import BannerLogo from "../components/BannerCom/BannerLogo.jsx";
import BannerBasket from "../components/BannerCom/BannerBasket.jsx";
import ListItem from "../container/NavItem.jsx";

export const ProductsInBasket = [];

const phones = [
  {
    id: 1,
    img: "/src/assets/images/Smartfon-REALME-12plus-5G-Zielony-front.jpg",
    model: "Realme 12+5G",
    description:
      "Lorem ipsum dolor siedzi, consectetur adipiscing elita. Nunc eros urna.",
    price: "3499,99zł",
  },
  {
    id: 2,
    img: "/src/assets/images/Smartfon-REALME-12plus-5G-Zielony-front.jpg",
    model: "Samsung 12+5G",
    description:
      "Lorem ipsum dolor siedzi, consectetur adipiscing elita. Nunc eros urna.",
    price: "3499,99zł",
  },
];

export function BasketPage() {
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
      <section role="menubar" id="BasketSection">
        <div id="BasketProducts">
          {phones.map((phone) => (
            <>
              <div key={phone.id} className="BasketProduct">
                <img src={phone.img} alt={phone.model} />
                <h3>{phone.model}</h3>
                <input type="text" placeholder="1" />
                <span>{phone.price}</span>
                <button>X</button>
              </div>
              <hr />
              <br />
            </>
          ))}
        </div>
        <div id="BasketConfirmation">
          <div>
            <h2>Do zapłaty: {"0.00"}zł</h2>
            <button>Zapłać</button>
          </div>
        </div>
      </section>
      <ListItem />
      <FooterContainer />
    </>
  );
}

export default BasketPage;
