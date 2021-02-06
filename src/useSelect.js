import React, { useState } from 'react';

const useSelect = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-select-${label.replace(' ', '').toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id} className="rating-group">
      {label}
      <select
        id={id}
        className={id}
        value={state}
        onChange={(event) => setState(event.target.value)}
        onBlur={(event) => setState(event.target.value)}
        disabled={options.length === 0}
      >
        {options.map((item) => (
          <option key={item.key} value={item.value}>
            {item.key}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, setState];
};

export default useSelect;
