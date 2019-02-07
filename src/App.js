import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import YouTube from './youtube';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.searchVideos = this.searchVideos.bind(this);
    this.selectVideo = this.selectVideo.bind(this);
  }

  searchVideos(q) {
    YouTube.get('/search', {
      params: {
        q,
        type: 'video',
      },
    })
      .then((res) => {
        this.setState({ videos: res.data.items });
      });
  }

  selectVideo(video) {
    this.setState({
      selectedVideo: video,
    });
  }

  render() {
    return (
      <div className="App ui container">
        <SearchBar onFormSubmit={this.searchVideos} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={this.selectVideo} />
      </div>
    );
  }
}

export default App;
