export default function Card() {
  return (
    <>
      <div className="card">
        <p>Questa è la mia app in React!</p>

        <div className="d-flex">
          <label htmlFor="myInput">Lascia il tuo messagio:</label>
          <input type="text" id='myInput' />
        </div>
      </div>
    </>
  )
}