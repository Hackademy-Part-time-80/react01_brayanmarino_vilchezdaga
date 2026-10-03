import './App.css'

function App() {
  const nome = 'Brayan';
  return (
    <>
      <div className="card">
        <h1 className='text-blue'>Ciao a tuti!!</h1>
        <p>Mi chiamo {nome}</p>
        <p>Questa è la mia app in React!</p>

        <div className="d-flex">
          <label htmlFor="myInput">Lascia il tuo messagio:</label>
          <input type="text" id='myInput' />
        </div>
      </div>

    </>
  )
}

export default App
