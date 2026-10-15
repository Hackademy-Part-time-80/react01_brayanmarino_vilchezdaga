export default function Item({ key, nome, email }) {
  return (
    <>
      <div key={key} className="item">
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
      </div>
    </>
  );
}
