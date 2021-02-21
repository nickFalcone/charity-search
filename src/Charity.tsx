import React from 'react';

export default function Charity({
  name,
  cause,
  mission,
  website,
  id,
  city,
  state,
}) {
  /**
   * Helper function to convert string to Title Case
   *
   * @param {string} str - string of text to convert to Title Case
   *
   * @return {string} Title Case string
   */
  const titleCase = (str) => {
    if (str === null || str === '') return false;
    else str = str.toString();

    return str.replace(/\w\S*/g, (txt) => {
      return `${txt.charAt(0).toUpperCase()}${txt.substr(1).toLowerCase()}`;
    });
  };

  return (
    <a href={website} target="_blank" rel="noreferrer" className="charity-link">
      <div className="charity" id={id}>
        <h1 className="charity-name">{name}</h1>
        <h2 className="charity-cause">{cause}</h2>
        <p className="charity-location">{`${titleCase(
          city
        )}, ${state.toUpperCase()}`}</p>
        <p className="charity-mission">
          {mission ? mission.replace(/<br>/g, '') : ''}
        </p>
      </div>
    </a>
  );
}
