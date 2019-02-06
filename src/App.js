import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import VideoItem from './components/VideoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  searchVideos = (term) => {
    console.log(term);
  }

  render() {
    return (
      <div className="App ui container">
        <SearchBar onFormSubmit={this.searchVideos} />
        <VideoDetail />
        <VideoList />
        <VideoItem />
      </div>
    );
  }
}

export default App;
