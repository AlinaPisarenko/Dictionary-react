import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(response) {
    setResults(response.data[0]);
  }

  function handlePexelsRespond(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleSubmit);

    let apiKeyPexels =
      "563492ad6f917000010000010a20f9813e434641bf52d0f882fd5a39";
    let apiUrlPexels = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${apiKeyPexels}` };
    axios.get(apiUrlPexels, { headers: headers }).then(handlePexelsRespond);
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
        <div className="question">What word do you want to look up?</div>
        <form onSubmit={handleSearch} className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Type a word"
            aria-describedby="button-addon2"
            onChange={handleKeywordChange}
          />
          <button
            onClick={handleSearch}
            className="btn btn-outline-secondary"
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
