import './App.css'
import Detail from './components/Detail'
import Main from './components/Main'
import {useState} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

export default function App() {
  const [mode,setMode]=useState(true)
  const darkStyle={
    color:'white',
    background:'hsl(207, 26%, 17%) ',
    transition:'0.6s all'
  }
  const lightStyle={
    color:'black ',
    background:'hsl(0, 0%, 98%)',
    transition:'0.6s all'
  }
  return (
    <BrowserRouter>
    <main style={mode?lightStyle:darkStyle}>
      <Routes>
        <Route path='/' element={<Main mode={mode} setMode={setMode} lightStyle={lightStyle} darkStyle={darkStyle} />}/>
      <Route path={`/country/:id`} element={<Detail/>}/>
      </Routes>
    </main>        
      </BrowserRouter>
  )
}
