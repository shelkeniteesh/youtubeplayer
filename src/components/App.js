import React from "react";
import SearchBar from "./SearchBar";

import youtube from "../apis/youtube";

export default class App extends React.Component {
  onTermSubmit = (term) => {
    youtube
      .get("/search", {
        params: {
          q: term,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
