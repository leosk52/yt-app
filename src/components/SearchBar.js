import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(text);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            id="inputText"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
