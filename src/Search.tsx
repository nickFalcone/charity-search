import React, { useState, useEffect, useContext } from 'react';
import useSelect from './useSelect';
import Results from './Results';
import MOCK from './mock';

const Search = () => {
  const [searchTerm, updateSearch] = useState('');
  const [charities, setCharities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastSearch, storeSearch] = useState('');
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
   * @param {number} rating - 1: only return rated charities; 0: return all charities
   * @param {boolean} [mock=false] - flag to mock API response (defaults false)
   *
   * @return {Promise} response
   */
  async function getCharities(searchTerm, rating, mock) {
    setLoading(true);
    if (mock) {
      setCharities(MOCK);
      setLoading(false);
      storeSearch('mock');
    } else {
      fetch(
        `https://charity-search-303800.ue.r.appspot.com/?search=${searchTerm}&rated=${rating}`
      )
        .then((response) => response.json())
        .then(
          (charities) => {
            setCharities(charities);
            setLoading(false);
          },
          (error) => {
            console.error(error);
            setLoading(false);
            // TODO: Render error component
          }
        );
      storeSearch(searchTerm);
    }
  }

  return (
    <div className="wrap">
      <div className="search">
        <h1 className="search-cta">Search 501(c)(3) charities</h1>

        <form
          className="search-form"
          onSubmit={(event) => {
            event.preventDefault();
            // getCharities(searchTerm, rating, true); // mock response
            getCharities(searchTerm, rating); // response from API
          }}
        >
          <label htmlFor="searchTerm">
            <span className="ada-hidden">Search</span>
            <input
              id="searchTerm"
              className="search-input"
              value={searchTerm}
              placeholder="humane society"
              onChange={(event) => updateSearch(event.target.value)}
            />
          </label>
          {/* TODO: button to clear input */}
          <RatingSelect />
          {/**
           * Disable submit button if:
           * - response is loading
           * - the search input is empty
           * - the search term is equal to the last searched (store cached TODO: load response from cache storage?)
           */}
          <button
            disabled={loading || searchTerm === '' || searchTerm === lastSearch}
          >
            Submit
          </button>
        </form>
      </div>
      <Results charities={charities} loading={loading} />
    </div>
  );
};

export default Search;
