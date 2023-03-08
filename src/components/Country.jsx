import {Link} from 'react-router-dom'
export default function Country({country,mode,lightStyle,darkStyle}){
const {name,population,capital,region,flags}=country
  return(
    <>
    <div  className={`card ${!mode?'shadow border-2 border-secondary':''}`} style={{width:'15rem'}}>
  <img className="card-img-top" src={flags.png} alt="Card image cap"/>
  <div style={mode?lightStyle:darkStyle} className={`card-body p-3 ${mode?'bg-white':''}`}>
    <h5 className="card-title">{name}</h5>
    <p  className="card-text m-0">Population:{population}</p>
    <p className="card-text m-0">Region:{region}</p>
    <p className="card-text m-0">Capital:{capital}</p>  
  </div>
</div>
    </>
  )
}