import React from 'react';
import './VideoItem.css';
import Moment from 'react-moment';

const VideoItem = ({ video, onVideoSelect }) => (
  <div className="video-item item" onClick={() => {onVideoSelect(video)}}>
    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="ui image" />
    <div className="content">
      <div className="header">{video.snippet.title}</div>
      <div className="description">
        <Moment format="LLLL">
          {video.snippet.publishedAt}
        </Moment>
      </div>
    </div>
  </div>
);

export default VideoItem;
