const ProductComponent = (props) => {
  return (
    <>
      <div className="product-container">
        <img src={props.img} alt="#" />
        <h2>{props.model}</h2>
        <h3>{props.description}</h3>
        <h4>{props.price}</h4>
        <div className="product-div">
          <h5>Dodaj do koszyka</h5>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
