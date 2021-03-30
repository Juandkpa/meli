import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from './Input';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.scss';

const SearchBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/items?search=${search}`);
    setSearch('');
  };
  return (
    <form className="search_bar" onSubmit={handleSubmit}>
      <Input
        placeholder="Nunca dejes de buscar"
        onChange={handleChange}
        value={search}
      />
      <button className="search_bar__button" type="submit">
        <BsSearch />
      </button>
    </form>
  );
};

export { SearchBar as default };
