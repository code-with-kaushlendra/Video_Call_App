import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import ZegoCLoud from './component/ZegoCLoud'
import Video_Room from './component/Video_Room'
const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<ZegoCLoud/>} />
    <Route path='/room/:id' element={<Video_Room/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
