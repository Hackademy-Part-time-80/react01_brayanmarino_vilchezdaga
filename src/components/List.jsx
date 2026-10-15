import Item from "./Item";

export default function List({ children }) {
  return (
    <>
      <div className="list">
        <p><b>Contatti:</b> </p>
        {children}
      </div>
    </>

  );
}

List.Item = Item;