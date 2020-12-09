import React from 'react';

const ShowVideo = ({ currentVideo, isLoading }) => {
  console.log(currentVideo);
  return (
    <div
      className="col-md-7 border pt-1"
      style={{ height: '600px', marginTop: '20px' }}>
      {isLoading ? (
        'Video is Loading...'
      ) : (
        <>
          <iframe
            width="100%"
            height="60%"
            src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            title={currentVideo.id.videoId}
          />
          <h5>{currentVideo.snippet.title}</h5>
          <p className="text-right">
            <b>Channel Id : {currentVideo.snippet.channelId} </b>
          </p>
          <p className="text-center">
            <b>Channel Name : {currentVideo.snippet.channelTitle} </b>
          </p>
          <p className="text-center">{currentVideo.snippet.description}</p>
        </>
      )}
    </div>
  );
};

export default ShowVideo;
