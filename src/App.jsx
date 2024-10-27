import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content(props) {
  return (<p style={{color: props.color, fontWeight: props.fontWeight}}>{props.text}</p>);
}

function Footer() {
  return (<h1>Created by Me, of course.</h1>);
}


function App() {
  

  return (
    <>

    <Header />
    <Content color="darkgreen" fontWeight="bold" text="Whoa my first React App"/>
    <Content color="cyan" fontWeight="bold" text="Let's goooooooooooo......."/>
    <Content color="darkred" fontWeight="bold" text="This works...!!!!!"/>
    <Footer />
      
    </>
  );
}

export default App;
