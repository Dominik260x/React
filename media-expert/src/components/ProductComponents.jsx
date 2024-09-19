import phones from "../data/Phones";

const ProductComponent = (props) => {
  const addPhone = {}

  return (
    <>
      <div className="product-container">
        <img src={props.img} alt="#" />
        <h2>{props.model}</h2>
        <h3>{props.description}</h3>
        <h4>{props.price}</h4>
        <div className="product-div">
          <button
            // onClick={() => {
            //   addPhone = {
            //     id: props.id,
            //     model: props.model,
            //     img: props.img,
            //     price: props.price,
            //   }
            // }}
          >
            <h5>Dodaj do koszyka</h5>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
