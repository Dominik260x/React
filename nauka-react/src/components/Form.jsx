import { useState } from "react";

export const Form = ({ onAddPerson }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [age, setAge] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddPerson({ name }, { tel }, { age });
      }}
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Imię"
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="number"
          name="tel"
          placeholder="Nr.Tel"
          defaultValue={tel}
          onChange={(e) => {
            setTel(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="number"
          name="age"
          placeholder="Wiek"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          defaultValue={age}
        />
      </div>
      <button disabled={name.length === 0 || tel.length === 0}>Zapis</button>
      <br />
      <br />
    </form>
  );
};
