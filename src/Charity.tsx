import React from 'react';

interface CharityProps {
  name: string;
  cause: string;
  mission: string;
  website: string;
  id: string;
  city: string;
  state: string;
  resultIndex: number;
  totalResults: number;
}

const Charity: React.FunctionComponent<CharityProps> = (props) => {
  /**
   * Helper function to convert string to Title Case
   *
   * @param {string} str - string of text to convert to Title Case
   * @return {string} Title Case string
   */
  const titleCase = (str: string): string => {
    if (!str || str === '') return '';

    return str.replace(/\w\S*/g, (txt) => {
      return `${txt.charAt(0).toUpperCase()}${txt.substr(1).toLowerCase()}`;
    });
  };

  return (
    <a
      href={props.website}
      target="_blank"
      rel="noreferrer"
      className="charity-link"
    >
      <div className="charity" id={props.id}>
        <span className="screen-reader-context">
          Result number {props.resultIndex + 1} of {props.totalResults}
        </span>
        {props.name ? <h1 className="charity-name">{props.name}</h1> : ''}
        {props.cause ? <h2 className="charity-cause">{props.cause}</h2> : ''}
        <p className="charity-location">{`${titleCase(
          props.city
        )}, ${props.state.toUpperCase()}`}</p>
        <p className="charity-mission">
          {props.mission ? props.mission.replace(/<br>/g, '') : ''}
        </p>
      </div>
      <span className="screen-reader-context">
        press enter to visit profile
      </span>
    </a>
  );
};

export default Charity;
