import React from 'react';

const ClearButton = (props) => {
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
      className="clear-button"
      aria-label="clear search input"
      type="reset"
      onClick={handleClear}
      disabled={props.searchTerm === ''}
    >
      {/* https://icons.getbootstrap.com/icons/x-circle/ */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </button>
  );
};

export default ClearButton;
