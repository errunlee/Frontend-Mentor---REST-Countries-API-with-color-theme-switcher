import { FaSun, FaMoon } from 'react-icons/fa';
export default function Nav({mode,setMode,light,dark}) {

  return(
    <div>
    <nav style={mode?light:dark} className={`d-flex shadow justify-content-between py-2 px-lg-5 px-3 align-items-center`}>     
    <h3 className='fw-bold '>Where in the world?</h3>
    <button style={mode?light:dark} onClick={()=>{setMode(!mode)}} className='d-flex btn align-items-center'>{!mode?<FaSun/>:<FaMoon/>}<p className='mx-2 my-0'>{mode?'Dark Mode':'Light Mode'}</p></button>
    </nav>
    </div>
  )
}
