import { Link } from "react-router-dom";

const NavElement = (props) => {
  return (
    <>
      <Link to={props.link}>
        <div>
          <h2>{props.title}</h2>
        </div>
      </Link>
    </>
  );
};

export default NavElement;
