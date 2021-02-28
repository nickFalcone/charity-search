import React from 'react';
import Charity from './Charity';
import Spinner from './Spinner';

interface CharityProps {
  ein: string;
  charityName: string;
  irsClassification: { nteeClassification: string };
  mission: string;
  mailingAddress: { city: string; stateOrProvince: string };
  charityNavigatorURL: string;
  resultIndex: number;
  totalResults: number;
}

const Results = (data: { charities: CharityProps[]; loading: boolean }) => {
  return (
    <div className="search-results" role="region" aria-live="polite">
      <p className="search-results-count">
        {data.charities.length} result{data.charities.length === 1 ? '' : 's'}
        <span className="screen-reader-context">, press tab to navigate</span>
      </p>
      {data.charities.length ? (
        data.charities.map((charity, i) => {
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
              resultIndex={i}
              totalResults={data.charities.length}
            />
          );
        })
      ) : data.loading ? (
        <Spinner />
      ) : (
        <span></span> // TODO: no results component should render if lastSearch !== '' (else, it will show on first load)
      )}
    </div>
  );
};

export default Results;
