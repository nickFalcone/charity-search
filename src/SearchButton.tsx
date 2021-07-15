import React from 'react';

const SearchButton = (props) => {
  /**
   * Clear searchTerm state, and provide a message for screen readers that the input was cleared.
   */
  const handleClear = (e: Event) => {
    e.preventDefault();
    props.updateSearch('');
    const srMessage = document.createElement('span');
    srMessage.setAttribute('role', 'alert');
    srMessage.classList.add('screen-reader-context');
    srMessage.innerHTML = 'search input cleared';
    document.body.appendChild(srMessage);
    setTimeout(() => {
      document.body.removeChild(srMessage);
    }, 1000);
  };

  return (
    <button
      disabled={
        props.loading ||
        props.searchTerm === '' ||
        props.searchTerm === props.lastSearch
      }
    >
      Search
    </button>
  );
};

export default SearchButton;
