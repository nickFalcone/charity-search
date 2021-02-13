import React from 'react';
import Charity from './Charity';
import Spinner from './Spinner';

const Results = (data) => {
  console.log(data);
  return (
    <div className="search-results" aria-live="polite">
      <p className="search-results-count">
        {data.charities.length} result{data.charities.length === 1 ? '' : 's'}
      </p>
      {data.charities.length ? (
        data.charities.map((charity) => {
          if (data.loading) {
            return <Spinner />;
          } else {
            return (
              <Charity
                key={charity.ein}
                name={charity.charityName}
                cause={charity.irsClassification.nteeClassification}
                mission={charity.mission}
                city={charity.mailingAddress.city}
                state={charity.mailingAddress.stateOrProvince}
                website={charity.charityNavigatorURL}
                id={charity.ein}
                path={`/charity/:${charity.charityName
                  .replace(/\s+/g, '-')
                  .toLowerCase()}`}
              />
            );
          }
        })
      ) : data.loading ? (
        <Spinner />
      ) : (
        <span></span> // no results
      )}
    </div>
  );
};

export default Results;
