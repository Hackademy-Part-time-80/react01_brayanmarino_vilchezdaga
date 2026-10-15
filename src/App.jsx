import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const title = 'Brayan Marino Vilchez Daga';
  const [contatti, setContatti] = useState([]);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (setState) => (e) => setState(e.target.value);


  const addContact = (e) => {
    e.preventDefault();
    const contact = { nome, email };
    setContatti((prev) => [...prev, contact]);
    setNome('');
    setEmail('');
  }

  return (
    <>
      <Navbar />
      <Header title={title} />
      <Main>
        <Main.Form onsubmit={addContact}>
          <Main.Form.InputNome onchange={handleChange(setNome)} nome={nome} />
          <Main.Form.InputEmail onchange={handleChange(setEmail)} email={email} />
        </Main.Form>
        <Main.List contatti={contatti} >
          {contatti.map((contatto, index) => {
            return (
              <Main.List.Item key={index} nome={contatto.nome} email={contatto.email} />
            );
          })}
        </Main.List>
      </Main>
    </>
  )
}

export default App
