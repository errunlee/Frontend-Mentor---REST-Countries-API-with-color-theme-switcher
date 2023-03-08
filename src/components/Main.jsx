import Nav from './Nav'
import {useState,useEffect,useRef} from 'react'
import { FaChevronDown,FaChevronUp } from 'react-icons/fa';
import Country from './Country'
import data from './data.json'
import {Link} from 'react-router-dom'
export default function Main({mode,setMode,lightStyle,darkStyle}) {
  const [countries,setCountries]=useState(data)
  const [options,setOptions]=useState(false)
  const [value,setValue]=useState('')
  const [filteredCountries,setFilteredCountries]=useState(countries)
  //toggle regions div
    const regionsDiv=useRef(null)
  const toggler=useRef(null)
     useEffect(() => {
    const handleClickOutside = (event) => {
       if (
    regionsDiv.current &&
    !regionsDiv.current.contains(event.target) || regionsDiv.current.contains(event.target)
  ) {
    setOptions(false);
  }    
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [regionsDiv]);


  const handleToggle=()=>{
setTimeout(()=>{
    setOptions(!options)  
},10)
  }
  const handleClick=(continent)=>{
    const newCountries=countries.filter((country)=>{
      return country.region.toLowerCase()===continent.toLowerCase()
    })
    setFilteredCountries(newCountries);
  }
  useEffect(()=>{
    const filtered=countries.filter((country)=>{
      return country.name.toLowerCase().includes(value.toLowerCase());
    })
    setFilteredCountries(filtered)
  },[value])
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
  return (
    <>
      <Nav mode={mode} setMode={setMode} light={light} dark={dark}/>
      <div style={mode?lightStyle:darkStyle} className='container my-4'>
        <div  className='input-field d-flex justify-content-lg-between align-items-start align-items-lg-center flex-column flex-lg-row '>
        <div style={mode?light:dark} className={`p-3 shadow ${!mode?'dark-input':''}`}><img style={{width:'24px',height:'24px'}} src='/images/search-icon.png'/><input style={mode?light:dark} value={value} onChange={(e)=>{setValue(e.target.value)}} className='border-0 mx-3' placeholder='Search for a country...' type='text' /></div>
        <div className='position-relative '>
          <div style={mode?light:dark} onClick={handleToggle} className='d-flex align-items-center justify-content-between shadow p-3 toggle-btn'>
          <p className='filter-button p-0'>Filter by region</p>{!options? < FaChevronDown/>:<FaChevronUp/>}
            </div>
       { options && <div style={mode?light:dark}  ref={regionsDiv} className='dropdown-options position-absolute rounded w-100'>
        <p onClick={()=>{handleClick('asia')}} className='my-0 px-2 py-1'>Asia</p>
        <p onClick={()=>{handleClick('africa')}} className='my-0 px-2 py-1'>Africa</p>
         <p onClick={()=>{handleClick('americas')}} className='my-0 px-2 py-1'>America</p>
        <p onClick={()=>{handleClick('europe')}} className='my-0 px-2 py-1'>Eurpoe</p>
         <p onClick={()=>{handleClick('Oceania')}} className='my-0 px-2 py-1'>Ocenia</p>
        </div>}
        </div>
        </div>
        <div  className='d-flex justify-content-center'>
        <div className='countries my-5    '>
          {
            filteredCountries.map((country,index)=>{
              return <div key={index}  className='mx-2 my-4'><Link to={`/country/${country.name}`}><Country lightStyle={lightStyle} mode={mode} country={country} darkStyle={darkStyle} /></Link></div>
            })
          }
        </div>
      </div>
        </div>
    </>
  )
}