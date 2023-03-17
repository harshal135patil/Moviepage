import React from 'react'
import "./index.css"
import bodyimg from "../../image/bodyimage.png"
import Areachart from '../graphfigure'
import arrowimg from "../../image/arrow.png"
import {AiOutlineCloudDownload} from 'react-icons/ai'

function Graph() {
  return (
    <div className='main1'>
      <div className='heading2'>
        <h3 style={{margin:"20px"}}>Avengers Black Widow </h3>
        <button>{<AiOutlineCloudDownload/>}Export</button>
      </div >
     
      <div className='body' style={{display:"flex",height:"400px",}}>
      <div className='image' style={{height:"380px",width:"360px",borderRadius:"10px"}}><img src={bodyimg} style={{borderRadius:"10px"}} alt="" height="100%" width="100%"/></div>
      <div className='graph'><Areachart /></div>
      </div>
    </div>
  )
}

export default Graph


