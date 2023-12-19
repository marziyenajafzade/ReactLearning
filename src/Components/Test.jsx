import { useState } from "react";
import './index.css'

function Test() {
  const Books = [
    { id: '1', name: 'book1' },
    { id: '2', name: 'book2' },
    { id: '3', name: 'book3' },
    { id: '4', name: 'book4' },
    { id: '5', name: 'book5' }
  ];

  function BookCard({ data: { id, name } }) {
    const [selected, setSelected] = useState(false);

    return (
      <li key={id} className={selected ? "bgLight" : ""}>
        {name}
        <button onClick={() => setSelected((s) => !s)}>change</button>
      </li>
    );
  }

  return (
    <>
      <ul>
        {Books.map((book) => (
          <BookCard key={book.id} data={book} />
        ))}
      </ul>
    </>
  );
}

export default Test;
