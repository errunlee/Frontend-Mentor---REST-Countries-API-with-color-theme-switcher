import {useParams,Link} from 'react-router-dom'
import data from './data.json'
import { FaArrowLeft } from 'react-icons/fa';
export default function Detail(){
  const {id}=useParams();
  const currentCountry=data.filter((country)=>{
    return country.name.toLowerCase()===id.toLowerCase();
  })
const {name,population,capital,region,subregion,nativeName,topLevelDomain,currencies,flags}=currentCountry[0]
  return(
    <>
      <div className='container min-vh-100'>
    <Link to='/'><button className='btn shadow border p-2 bg-white m-3'><span className='mx-1'><FaArrowLeft/></span>Go back</button></Link>
      <div className='info  d-flex flex-lg-row flex-column justify-content-lg-around  align-items-center my-5'>
        <div>
        <img src={flags.png}/>
        </div>
        <div className='align-self-start p-3'>
       <h2 className='mx-lg-3 fw-bold'>{name}</h2>
          <div className='d-flex flex-lg-row flex-column '>
          <div className='mx-lg-3'>
        <p><b>Native Name</b> : {nativeName}</p>
        <p><b>Population :</b> {population}</p>
        <p><b>Region :</b> {region}</p>
        <p><b>Sub Region</b> : {subregion}</p>
        <p><b>Capital</b> : {capital}</p>
            </div>
            <div className='mx-lg-5'>
        <p><b>Top Level Domain </b> : {topLevelDomain}</p>
        <p><b>Currencies </b>: {currencies[0].name}</p>
              </div>
          </div>
          </div>
      </div>
        </div>
    </>
  )
}