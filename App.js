import React from 'react';
import './App.css';
//import Photo from './components.js';
//import Title from './components.js';


const Wrapper = props => {
  return <div style={{textAlign:"center"}}>
  {props.children}
  </div>;
};

const Photo = (props) => {
  return <img src={props.src} alt=""></img>;
};

const Title = props => {
  return props.small ? (
    <small style={props.style}>{props.children}</small>
  ) : 
  (
    <h1 style={props.style}>{props.children}</h1>
  );
};


function App() {
  return (
  <Wrapper>

    <Photo src="/profile.png" />

    <Title>Narimene</Title>

    <Title small>Front-End developper</Title>
 
  </Wrapper>

  );
}

export default App;
