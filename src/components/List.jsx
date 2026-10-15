export default function List({ contatti }) {
  return (
    <>
      {contatti.map((contatto, index) => {
        return (
          <div key={index} className="list">
            <div className="item">
              <p>Nome: {contatto.nome}</p>
              <p>Email: {contatto.email}</p>
            </div>
          </div>
        );
      })}
    </>

  );
}