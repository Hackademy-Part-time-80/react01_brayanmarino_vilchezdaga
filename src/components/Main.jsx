import Form from "./Form";
import List from "./List";

export default function Main({ children }) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
}

Main.Form = Form;
Main.List = List;