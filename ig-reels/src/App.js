import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (

    // BEM naming convention
    <div className="app">
      <h1>Hello World!</h1>
      <div className="app__top">
        <img
          className="app__logo"
          src="https://i.pinimg.com/originals/53/93/27/539327d89da32d1154f0ab776bac96c1.png"
          alt=""
        /> 
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        <VideoCard 
          channel='cleverqazi'
          avatarSrc='https://avatarfiles.alphacoders.com/183/thumb-183310.jpg'
          song='Test song - afafafaf'
          url='https://scontent-lga3-1.cdninstagram.com/v/t50.2886-16/117950347_379983256320436_3527680957063597383_n.mp4?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=fV2FEHywlKYAX_IieHl&oe=5F3A2B50&oh=33de2cd7a90c6a17b97b3dfefb3688a7'
          likes={950}
          shares={30}
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
