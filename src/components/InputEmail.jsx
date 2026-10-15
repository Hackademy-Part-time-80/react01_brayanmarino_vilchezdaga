export default function InputEmail({ onchange, email }) {
  return (
    <>
      <input type="email" placeholder="Email" onChange={onchange} value={email} />
    </>
  );
}

