import React, { useState } from 'react';

interface useSelectProps {
  label: string;
  defaultState: any;
  options: any[]; // FIXME:
}

const useSelect: React.FunctionComponent<useSelectProps> = (props) => {
  const [state, setState] = useState(props.defaultState);
  const id = `use-select-${props.label.replace(' ', '').toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id} className="rating-group">
      {props.label}
      <select
        id={id}
        className={id}
        value={state}
        onChange={(event) => setState(event.target.value)}
        onBlur={(event) => setState(event.target.value)}
        disabled={props.options.length === 0}
      >
        {props.options.map((item) => (
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
