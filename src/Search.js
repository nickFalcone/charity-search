import React, { useState, useEffect, useContext } from 'react';
import useSelect from './useSelect';
import Results from './Results';
import MOCK from './mock';

const Search = () => {
  const [searchTerm, updateSearch] = useState('');
  const [charities, setCharities] = useState([]);
  const [rating, RatingSelect] = useSelect('Rating', 1, [
    {
      key: 'Rated',
      value: 1,
    },
    {
      key: 'All',
      value: 0,
    },
  ]);

  /**
   * Return charities from the Charity Navigator API
   *
   * @param {string} searchTerm - string of text to search
   * @param {boolean} [mock=false] - flag to mock API response
   *
   * @return {Promise} response
   */
  async function getCharities(searchTerm, rating, mock) {
    if (mock) {
      setCharities(MOCK);
    } else {
      fetch(
        `https://charity-search-303800.ue.r.appspot.com/?search=${searchTerm}&rated=${rating}`
      )
        .then((response) => response.json())
        .then(
          (charities) => {
            setCharities(charities);
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          getCharities(searchTerm, rating);
        }}
      >
        <label htmlFor="searchTerm">
          Search
          <input
            id="searchTerm"
            value={searchTerm}
            placeholder="humane society"
            onChange={(event) => updateSearch(event.target.value)}
          />
        </label>
        <RatingSelect />
        <button>Submit</button>
      </form>
      <p>
        {charities.length} result{charities.length === 1 ? '' : 's'}
      </p>
      <Results charities={charities} />
    </div>
  );
};

export default Search;
