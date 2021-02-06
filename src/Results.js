import React from 'react';
import Charity from './Charity';

const Results = (data) => {
  return (
    <div className="search-results" aria-live="polite">
      <p className="search-results-count">
        {data.charities.length} result{data.charities.length === 1 ? '' : 's'}
      </p>
      {data.charities.length ? (
        data.charities.map((charity) => {
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
        })
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Results;
