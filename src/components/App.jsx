import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube.js";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.getSearchTerm("buildings");
  }

  getSearchTerm = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  getSelectedVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar getSearchTerm={this.getSearchTerm} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                getSelectedVideo={this.getSelectedVideo}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
