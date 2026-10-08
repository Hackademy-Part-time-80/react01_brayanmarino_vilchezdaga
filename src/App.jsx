import './App.css'
import Card from './components/Card';
import Header from './components/Header';
import List from './components/List';
import Navbar from './components/Navbar';

function App() {
  const nome = 'Brayan Marino Vilchez Daga';
  const languages = ['php', 'laravel', 'sql', 'react', 'javascript', 'python'];
  return (
    <>
      <Navbar />
      <Header title={nome} />
      <Card />
      <List languages={languages} />
    </>
  )
}

export default App
