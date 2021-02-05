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
  return (
    <div className="charity" id={id}>
      <a
        href={website}
        target="_blank"
        rel="noreferrer"
        className="charity-link"
      >
        <h1>{name}</h1>
      </a>
      <h2>{cause}</h2>
      <p>{`${city}, ${state}`}</p>
      <p>{mission ? mission.replace(/<br>/g, '') : ''}</p>
    </div>
  );
}
