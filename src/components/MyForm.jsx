import { useState } from "react";

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
      <form onSubmit={addContact}>
        <input type="text" placeholder="Nome" onKeyUp={cambiareNome} />
        <input type="email" placeholder="Email" onKeyUp={cambiareEmail} />
        <button type="submit">Inviare</button>
      </form>

      {contatti.map((contatto) => {
        return (
          <div key={contatto}>
            <hr />
            <p>Nome: {contatto.nome}</p>
            <p>Email: {contatto.email}</p>
          </div>
        );
      })}

    </>
  );
}