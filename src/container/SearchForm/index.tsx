import React, { useState } from "react";

interface ISearchFormProps {
  fetchPictures: (query: string) => void;
}

const SearchForm: React.FC<ISearchFormProps> = ({ fetchPictures }) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchPictures(query);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Query:
        <input
          type="search"
          value={(query)}
          placeholder="dogs"
          onChange={e => setQuery(e.target.value)}
        />
      </label>
      <input type="submit" value="Search" disabled={!query} />
    </form>
  );
};

export default SearchForm;
