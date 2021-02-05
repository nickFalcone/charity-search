import React from 'react';
import Charity from './Charity';

const Results = (data) => {
  return (
    <div className="search">
      {!data.charities.length ? (
        <h1>Search 501(c)(3) charities</h1>
      ) : (
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
      )}
    </div>
  );
};

export default Results;
