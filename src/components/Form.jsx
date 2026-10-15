import InputNome from "./InputNome";
import InputEmail from "./InputEmail";

export default function Form({ onsubmit, children }) {
  return (
    <>
      <form onSubmit={onsubmit} className="myForm">
        {children}
        <button type="submit">Inviare</button>
      </form>

    </>
  );
}

Form.InputNome = InputNome;
Form.InputEmail = InputEmail;