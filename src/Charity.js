import React from 'react';

// Primer
import { Heading, Link, Text } from '@primer/components';

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
    <Link
      href={website}
      target="_blank"
      rel="noreferrer"
      className="charity-link"
    >
      <div className="charity" id={id}>
        <Heading className="charity-name">{name}</Heading>
        {/* <h1 className="charity-name">{name}</h1> */}
        <Heading className="charity-cause">{cause}</Heading>
        {/* <h2 className="charity-cause">{cause}</h2> */}
        <Text as="p" className="charity-location">{`${titleCase(
          city
        )}, ${state.toUpperCase()}`}</Text>
        <Text as="p" className="charity-mission">
          {mission ? mission.replace(/<br>/g, '') : ''}
        </Text>
      </div>
    </Link>
  );
}
