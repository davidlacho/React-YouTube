import React from 'react';

const VideoDetail = ({ video }) => (
  <div className="video-detail eleven wide column">
    {(video && (
    <React.Fragment>
      <div className="ui segment">
        <div className="ui embed">
          <iframe
            title={video.snippet.title}
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="ui segment">
        <h3 className="ui header">{video.snippet.title}</h3>
        <h4 className="ui header">Video by {video.snippet.channelTitle}</h4>
        {video.snippet.description && (<p>{video.snippet.description}</p>)}
      </div>
    </React.Fragment>
    )) || <p>Loading...</p>}
  </div>
);

export default VideoDetail;
