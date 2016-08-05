import React from 'react';
import Header from './components/Header.js'
import Body from './components/Body.js'
import './App.scss'

const App = () => (
  <header className='header'>
    <Header />
    <Body content='my name is Sandy'/>
  </header>
)

export default App;
