import React, {useState} from "react";

export default function SearchForm({
  value,
  onSearch = f => f
}) {
  const [inputValue, setInputValue] = useState(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}
