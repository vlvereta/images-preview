import React, { useState } from 'react';

import './styles.css';

interface ISearchFormProps {
  onClear: () => void;
  fetchPictures: (query: string) => void;
}

const SearchForm: React.FC<ISearchFormProps> = ({ onClear, fetchPictures }) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchPictures(query);
  };

  const handleClear = () => {
    setQuery('');
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <label>
        Query:&nbsp;
        <input
          type="text"
          value={query}
          placeholder="dogs"
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <input type="submit" value="Search" disabled={!query} />
      <button onClick={handleClear} disabled={!query}>Clear</button>
    </form>
  );
};

export default SearchForm;
