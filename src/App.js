import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Message from './components/Message';
import Confetti from './components/Confetti';
import './App.css';



const App = () => {
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg',
    '/images/11.jpg',
    '/images/12.jpg',
    '/images/13.jpg',
    '/images/14.jpg',
    '/images/15.jpg',
    '/images/16.jpg',
    '/images/17.jpg',
    '/images/18.jpg',
    '/images/19.jpg',
    '/images/20.jpg',
    '/images/21.jpg',
    '/images/22.jpg',
    '/images/23.jpg',
    '/images/24.jpg',
    '/images/25.jpg',
    '/images/26.jpg',
    '/images/27.jpg',
    '/images/28.jpg',
    '/images/29.jpg',
    '/images/30.jpg',
    '/images/31.jpg',
    '/images/32.jpg',
    '/images/33.jpg',
    '/images/34.jpg',
    '/images/35.jpg',
    '/images/36.jpg',
    '/images/37.jpg',
    '/images/38.jpg',
    '/images/39.jpg',
    '/images/42.jpg',
    '/images/43.jpg',
    '/images/44.jpg',
    '/images/45.jpg',
    '/images/46.jpg',
    '/images/47.jpg',
    '/images/48.jpg',
    '/images/49.jpg',
    '/images/50.jpg',
    '/images/51.jpg',
    '/images/52.jpg',
    '/images/53.jpg',
    '/images/54.jpg',
    '/images/55.jpg',
    '/images/56.jpg',
  ];

  return (
    <div className="App">
      <Confetti />
      <Header />
      <Gallery images={images} />
      <Message />
    </div>
  );
};

export default App;
