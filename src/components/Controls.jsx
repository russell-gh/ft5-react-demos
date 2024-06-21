function Controls({ onInput, searchTerm, searchTermRef }) {
  return (
    <input
      onChange={() => {}}
      type="text"
      onInput={onInput}
      value={searchTerm}
      ref={searchTermRef}
    />
  );
}

export default Controls;
