import React from 'react';

const VideosCard = ({ video, changeCurrentVideo }) => {
  return (
    <div
      key={video.id.videoId}
      className="border col-md-12 d-flex mb-1 p-1"
      style={{ cursor: 'Pointer' }}
      onClick={() => changeCurrentVideo(video)}>
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
        height="100%"
        width="30%"
        className="mr-1"
      />
      <div style={{ width: '68%' }}>
        <b>
          <p style={{ fontSize: '0.99rem !important' }}>
            {video.snippet.title}
          </p>
        </b>
        <p className="text-right">{video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideosCard;
