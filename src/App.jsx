import './App.css'
import Card from './components/Card';
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
  }

  return (
    <>
      <Navbar />
      <Header title={title} />
      <Card />
      <Main>
        <Main.Form onsubmit={addContact}>
          <Main.Form.InputNome onchange={handleChange(setNome)} />
          <Main.Form.InputEmail onchange={handleChange(setEmail)} />
        </Main.Form>
        <Main.List contatti={contatti} />
      </Main>
    </>
  )
}

export default App
