import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import './styles/Finder.css'

// Components
import Header from './components/Header/Header'


// Page

import HomePage from './pages/HomePage'
import FinderPage from './pages/FinderPage'

function App() {

  return (
    <>
      <Header />


      <Routes>
        <Route  path='/' element={<HomePage />}/>
        <Route  path='finder' element={<FinderPage />}/>
      </Routes>

    </>
  )
}

export default App
