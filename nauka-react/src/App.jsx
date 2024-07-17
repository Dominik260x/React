import { PersonInfo } from "./components/PersonInfo";
import { Form } from "./components/Form";
import { useState } from "react";

const initialPeople = [
  {
    name: "Dominik",
    age: 25,
    tel: 903298304,
  },
  {
    name: "Mateusz",
    age: 29,
    tel: 872954785,
  },
  {
    name: "Michał",
    tel: 872954785,
  },
];
function App() {
  const [isFormShown, setIsFromShown] = useState(false);
  const [persons, setPersons] = useState(initialPeople);

  const addPerson = (data) => {
    const people = [...persons, data];
    setPersons(people);
    setIsFromShown(false);
  };

  return (
    <>
      <h1>Lista osób</h1>
      {isFormShown && <Form onAddPerson={addPerson} />}
      <button onClick={() => setIsFromShown(true)}>Dodaj</button>
      {persons.map((person) => (
        <PersonInfo name={person.name} age={person.age} tel={person.tel} />
      ))}
    </>
  );
}

export default App;
