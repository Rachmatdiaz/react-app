import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Body from './components/Body';
import Footer from './components/Footer';
import Image from './components/Image';
import './components/Image.css';
import banner from './banner2.jpg'

//class component
class App extends React.Component {
  render() {
    return(
      <div> 
        <Header />
         <img src={banner} alt="banner" width="1263px" />

        <Image />
        {/* <Navbar /> */}
        <Body />
        <Footer />
      </div>
    );
  }
}


export default App;
