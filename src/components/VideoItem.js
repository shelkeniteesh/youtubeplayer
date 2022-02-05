import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={(e) => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt="thumbnail"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
