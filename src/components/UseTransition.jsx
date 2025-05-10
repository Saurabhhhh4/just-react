import { useState, useTransition } from "react";

function SearchComponent({ bigList }) {
  const [query, setQuery] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Urgent update (typing)

    startTransition(() => {
      const result = bigList.filter((item) => item.includes(value));
      setFilteredList(result); // Non-urgent update
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
