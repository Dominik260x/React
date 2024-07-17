import { useState } from "react";
import { Tel } from "./Tel";

export const PersonInfo = (props) => {
  let stateArray = useState(false);
  let [isExpanded, setIsExpanded] = stateArray;

  const buttonE1 = (
    <button onClick={() => setIsExpanded(!isExpanded)}>
      {isExpanded ? "Ukryj" : "Pokaż"}
    </button>
  );

  return (
    <>
      <h2>{props.name}</h2>
      {buttonE1}
      {isExpanded && (
        <>
          <h3>
            Tel: <Tel tel={props.tel} />
          </h3>
          {props.age && <h3>Wiek: {props.age}</h3>}
        </>
      )}
      <hr />
    </>
  );
};
