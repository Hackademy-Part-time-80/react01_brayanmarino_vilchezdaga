export default function List({ languages }) {
  return (
    <div className="languages">
      <ul>
        {languages.map((language) => {
          return (
            <li key={language}>{language}</li>
          );
        })}
      </ul>
    </div>

  );
}