import React from 'react';
import Charity from './Charity';
import Spinner from './Spinner';
// TODO: extract to an interface to prevent duplicate type assertion

const Results = (data: {
  charities: {
    ein: string;
    charityName: string;
    irsClassification: { nteeClassification: string };
    mission: string;
    mailingAddress: { city: string; stateOrProvince: string };
    charityNavigatorURL: string;
  }[];
  loading: boolean;
}) => {
  return (
    <div className="search-results" aria-live="polite">
      <p className="search-results-count">
        {data.charities.length} result{data.charities.length === 1 ? '' : 's'}
      </p>
      {data.charities.length ? (
        data.charities.map(
          (charity: {
            ein: string;
            charityName: string;
            irsClassification: { nteeClassification: string };
            mission: string;
            mailingAddress: { city: string; stateOrProvince: string };
            charityNavigatorURL: string;
          }) => {
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
                />
              );
            }
          }
        )
      ) : data.loading ? (
        <Spinner />
      ) : (
        <span></span> // no results
      )}
    </div>
  );
};

export default Results;
