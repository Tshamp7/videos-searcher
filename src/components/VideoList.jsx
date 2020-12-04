import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, getSelectedVideo }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        getSelectedVideo={getSelectedVideo}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
