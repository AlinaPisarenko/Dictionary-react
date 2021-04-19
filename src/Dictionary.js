import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleSubmit);
  }
  function handleSearch(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="question">What word are you looking for?</div>
        <form onSubmit={handleSearch} class="input-group mb-3">
          <input
            type="search"
            class="form-control"
            placeholder="Type a word"
            aria-describedby="button-addon2"
            onChange={handleKeywordChange}
          />
          <button
            onClick={handleSearch}
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </form>
        <div className="suggestion">
          suggested words: sunset, ocean, movie...
        </div>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
