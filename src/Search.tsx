import React, { useState, useEffect, useContext } from 'react';
import useSelect from './useSelect';
import ClearButton from './ClearButton';
import SearchButton from './SearchButton';
import Error from './Error';
import Results from './Results';
import mockResponse from './mock.json';

const Search = () => {
  const [searchTerm, updateSearch] = useState('');
  const [charities, setCharities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [lastSearch, storeSearch] = useState('');
  const [rating, RatingSelect] = useSelect('Rating', '1', [
    {
      key: 'Rated',
      value: '1',
    },
    {
      key: 'All',
      value: '0',
    },
  ]);

  /**
   * Return charities from the Charity Navigator API
   */
  async function getCharities(
    searchTerm: string,
    rating: string,
    mock?: boolean,
    mockResponse?: Array<Object>
  ): Promise<any> {
    setLoading(true);
    if (mock) {
      setTimeout(() => {
        setCharities(mockResponse);
        setLoading(false);
        storeSearch('mock');
      }, 1000);
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
            setError(true);
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
            // TODO: set mocks a better way
            // getCharities(searchTerm, rating, true, mockResponse); // mock response success
            getCharities(searchTerm, rating); // response from API
          }}
        >
          <label htmlFor="searchTerm">
            <span className="ada-hidden">Input, Search 501c3 charities</span>
            <input
              id="searchTerm"
              className="search-input"
              value={searchTerm}
              placeholder=""
              onChange={(event) => updateSearch(event.target.value)}
            />
          </label>

          <ClearButton updateSearch={updateSearch} searchTerm={searchTerm} />

          <RatingSelect />

          <SearchButton
            loading={loading}
            searchTerm={searchTerm}
            lastSearch={lastSearch}
          />
        </form>
      </div>
      <Results charities={charities} loading={loading} />
      <Error error={error} />
    </div>
  );
};

export default Search;
