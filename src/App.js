import React from 'react';
import './App.css';
import magic from './magic.jpg'
import myVideo from './nature.mp4';

function App() {
  return (
    <div>
    <div className="container" style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="titlered">Makni Ahmed</h1>
      <br />
      <img src={magic} alt='magic' width={320} height={240} />
      <br />
      <img src="/magic.jpg" alt='magic' width={320} height={240} />
    <video width={320} height={240} controls>
      <source src={myVideo}type="video/mp4" />
    </video>
    </div>
  </div>
);
}

export default App;
