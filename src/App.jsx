import './App.css'
import About from './componentes/about'
import Apod from './componentes/apod'
import Astros from './componentes/astros'
import Navbar from './componentes/navbar'

import {Routes, Route} from 'react-router-dom'

function App() {
  const links=[
    { href:"/", text:"Home"},
    { href:"/astros", text:"Astros"},
    { href:"/apod", text:"Apod"},
    { href:"/about", text:"About"}
  ]
  return (
    <>
      <Navbar links={links}/>
      <Routes>
      <Route element={<Astros/>} path="/astros" />
      <Route element={<Apod/>} path="/apod" />
      <Route element={<About/>} path="/about" />
      </Routes>
      
    </>
  )
}

export default App
