import React from 'react';
import VideoItem from './VideoItem';


const VideoList = (props) => {
  const { videos, onVideoSelect } = props;
  const renderedList = videos.map(
    video => (<VideoItem video={video} key={video.etag} onVideoSelect={onVideoSelect} />)
  );

  return (
    <div className="video-list ui relaxed divided list five wide column">
      {renderedList}
    </div>
  );
};

export default VideoList;
