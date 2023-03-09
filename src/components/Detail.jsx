import {useParams,Link} from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
export default function Detail({countries,setCountries,light,dark,mode}){
  const {id}=useParams();
  const currentCountry=countries.filter((country)=>{
    return country.alpha3Code.toLowerCase()===id.toLowerCase();
  })
const {name,population,capital,region,subregion,nativeName,topLevelDomain,currencies,flags,borders}=currentCountry[0]
  return(
    <>
      <div className='container'>
    <Link to='/'><button className='btn shadow border p-2 bg-white m-3'><span className='mx-1'><FaArrowLeft/></span>Go back</button></Link>
      <div className='info row align-items-center my-5 mb-0'>
        <div className='col-lg-6 '>
        <img className='flag' src={flags.png}/>
        </div>
        <div className='align-self-start p-3 col-lg-6 '>
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
          <div className='d-flex mx-lg-3 flex-lg-row flex-column'>
      <p className='m-0 borders'><strong>Border Countries :</strong>  </p>
            <div>
            {
             borders && borders.map((borderCountry,index)=>{
                return(
                  <Link key={index}  to={`/country/${borderCountry}`}><button style={mode?{}:dark} className={`btn px-3 mx-2 my-1 py-1 shadow ${!mode?'text-white':''}`} >{borderCountry}</button></Link>
                )
              })
            }
            </div>
      </div>
          </div>
      </div>
        
        </div>
    </>
  )
}