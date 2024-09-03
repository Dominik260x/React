import NavData from "../data/NavItemData.jsx";
import NavElement from "../components/NavElement.jsx";

function Listitem() {
  return (
    <>
      <aside role="listitem">
        <div id="ProductList">
          <h1>Produkty</h1>
        </div>
        {NavData.map((element) => (
          <NavElement link={element.link} title={element.title} />
        ))}
      </aside>
    </>
  );
}

export default Listitem;
