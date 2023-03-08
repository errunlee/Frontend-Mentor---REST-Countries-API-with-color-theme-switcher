import './App.css'
import Detail from './components/Detail'
import Main from './components/Main'
import {useState,useEffect} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Loader from './components/Loader'
import data from './components/data.json'

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
  return (
    <BrowserRouter>
      {countries.length>0 ? <main style={mode?lightStyle:darkStyle}>
      <Routes>
        <Route path='/' element={<Main mode={mode} setMode={setMode} lightStyle={lightStyle} darkStyle={darkStyle} countries={countries} setCountries={setCountries} />}/>
      <Route path={`/country/:id`} element={<Detail/>}/>
      </Routes>
    </main> :<Loader/>}       
      </BrowserRouter>
  )
}
