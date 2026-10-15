import { useState } from "react";
import List from "./List";

export default function MyForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const cambiareNome = (e) => setNome(e.target.value);
  const cambiareEmail = (e) => setEmail(e.target.value);
  const [contatti, setContatti] = useState([]);

  const addContact = (e) => {
    e.preventDefault();
    const contact = { nome, email };
    setContatti((prev) => [...prev, contact]);

  }

  return (
    <>
      <form onSubmit={addContact} className="myForm">
        <input type="text" placeholder="Nome" onKeyUp={cambiareNome} />
        <input type="email" placeholder="Email" onKeyUp={cambiareEmail} />
        <button type="submit">Inviare</button>
      </form>
      <List contatti={contatti}/>

    </>
  );
}