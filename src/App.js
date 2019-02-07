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

  componentDidMount() {
    this.searchVideos('David Lacho');
  }

  selectVideo(video) {
    this.setState({
      selectedVideo: video,
    });
    this.changeTitle(video.snippet.title);
  }

  searchVideos(q) {
    YouTube.get('/search', {
      params: {
        q,
        type: 'video',
      },
    })
      .then((res) => {
        this.setState({
          videos: res.data.items,
          selectedVideo: res.data.items[0],
        });
        this.changeTitle(res.data.items[0].snippet.title);
      });
  }

  changeTitle(title) {
    document.title = `Video Search | ${title}`;
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar onFormSubmit={this.searchVideos} />
        <div className="App ui container">
          <div className="ui grid">
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} onVideoSelect={this.selectVideo} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
