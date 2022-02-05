import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = (term) => {
    youtube
      .get("/search", {
        params: {
          q: term,
        },
      })
      .then((res) => {
        this.setState({
          videos: res.data.items,
          selectedVideo: res.data.items[0],
        });
      });
  };

  onVideoSelect = (video) => {
    console.log("From the App!", video);
    this.setState({ selectedVideo: video });
  };

  // renderContent = () => {
  //   if (this.state.selectedVideo) {
  //     return (
  //       <div className="ui container">
  //         <SearchBar onFormSubmit={this.onTermSubmit} />
  //         <VideoDetail video={this.state.selectedVideo} />
  //         <VideoList
  //           onVideoSelect={this.onVideoSelect}
  //           videos={this.state.videos}
  //         />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="ui container">
  //         <SearchBar onFormSubmit={this.onTermSubmit} />
  //         <VideoList
  //           onVideoSelect={this.onVideoSelect}
  //           videos={this.state.videos}
  //         />
  //       </div>
  //     );
  //   }
  // };
  render() {
    return (
      <div>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
