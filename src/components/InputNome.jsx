export default function InputNome({ onchange, nome }) {
  return (
    <>
      <input type="text" placeholder="Nome" onChange={onchange} value={nome} />
    </>
  );
}

