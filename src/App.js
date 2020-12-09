import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
  //search item
  const [search, setSearch] = useState('');
  //videos lists
  const [data, setData] = useState([]);
  // current video
  const [currentVideo, setCurrentVideo] = useState({});
  //isLoading
  const [isLoading, setisLoading] = useState(true);
  //video embed snippet
  //<iframe width="972" height="547" src="https://www.youtube.com/embed/IVgFHQeS1vk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  //function
  const searchData = (text) => {
    setSearch(text);
    axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: search,
          maxResults: 15,
          key: <Your_Api_Key>,
          part: 'snippet',
        },
      })
      .then((videos) => {
        const videosFiltered = filterVideos(videos.data.items);
        setData(videosFiltered);
        setCurrentVideo(videosFiltered[0]);
        setisLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const filterVideos = (videoList) => {
    const filteredVideos = [];

    videoList.map((video) => {
      if (video.id.kind === 'youtube#video') {
        filteredVideos.push(video);
      }
    });

    return filteredVideos;
  };

  const changeCurrentVideo = (video) => {
    setCurrentVideo(video);
  };

  useEffect(() => {
    searchData('Fullyworld web Tutorials');
  }, []);
  return (
    <div className="App">
      <Header search={searchData} />
      <Body
        currentVideo={currentVideo}
        isLoading={isLoading}
        videos={data}
        changeCurrentVideo={changeCurrentVideo}
      />
    </div>
  );
};

export default App;
