import './App.css'
import Detail from './components/Detail'
import Main from './components/Main'
import {useState,useEffect} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Loader from './components/Loader'
import data from './components/data.json'
import Nav from './components/Nav'
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
  // for nav and light bg
    const light={
    background:'white',
    color:'black',
    transition:'0.6s all'
    
  }
  const dark={
    background:'hsl(209, 23%, 22%)',
    color:'white',
    transition:'0.6s all'
    
  }
  //fetch data
  const [countries,setCountries]=useState([])  
  const url='https://restcountries.com/v2/all'
  const getData=async()=>{
    try{
    const data=await fetch(url)
    const res=await data.json();
    setCountries(res)  
    }
    catch{
      setCountries(data);
      console.log('failed to load from server, using local data. might not be uptodate')
    }
   
  }
  useEffect(()=>{
    getData();
  },[])
  useEffect(()=>{
    document.body.style.backgroundColor=mode?'hsl(0, 0%, 98%)':'hsl(207, 26%, 17%)'
    document.body.style.transition='0.6s all'
  },[mode])
  return (
    <BrowserRouter>
      <Nav mode={mode} setMode={setMode} light={light} dark={dark}/>
      
      {countries.length>0 ? <main style={mode?lightStyle:darkStyle}>
      <Routes>
        <Route path='/' element={<Main light={light} dark={dark} mode={mode} setMode={setMode} lightStyle={lightStyle} darkStyle={darkStyle} countries={countries} setCountries={setCountries} />}/>
      <Route path={`/country/:id`} element={<Detail countries={countries} setCountries={setCountries} light={light} dark={dark} mode={mode} />}/>
      </Routes>
    </main> :<Loader/>}       
      </BrowserRouter>
  )
}
