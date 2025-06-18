// import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import About  from './components/About/About'
import Contact from './components/Contact/Contact'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Header />
      <div>
        <Routes>
          <Route path = {'/Home'} element = {<Home/>}></Route>
          <Route path = {'/About'} element = {<About/>}></Route>
          <Route path = {'/Contact'} element = {<Contact/>}></Route>
        </Routes>
      </div>
      <Footer/> 
      </Router>
    </>
  )
}

export default App
