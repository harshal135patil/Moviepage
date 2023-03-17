import React from 'react'
import "./index.css"
import Table from 'react-bootstrap/Table';
import arrow from "../../image/arrow.png"
import {RiSearchLine } from "react-icons/ri"
import img1 from "../../image/pic1.png"
import img2 from "../../image/pic2.png"
import img3 from "../../image/pic3.png"
import img4 from "../../image/pic4.png"
import img5 from "../../image/pic5.png"
import img6 from "../../image/pic6.png"




function Moviecollection() {
  return (
    <div className='main'>
        <div className='mininav'>
        <ul>
            <li className='allmovies'>All Movies</li>
            <li className='fade'>Trending</li>
            <li className='fade'>Upcomming Premier</li>
        </ul>
        <RiSearchLine style={{position:"relative",top:"47px",left:"400px"}}/>
        <input type="text" placeholder="Search"/>
        </div>
        <div className='border'></div>
        <p className='thirdbodyheading' ><b>Interest Tracking Insights</b></p>
      <p style={{   position:"relative",
        bottom: "30px",color:"#6A6A6A"
    }}>Keep track of the insights on this movie</p>
   
      <Table style={{width:"177vh",border:"1px solid #e0e0e0", borderRadius:"10px"}} striped>
      <thead style={{border:"1px solid #e0e0e0"}}>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Popularity/Intrest</th>
          <th>Watchlists</th>
          <th>Streams</th>
          <th>Release Date</th>
        </tr>
      </thead>
      
      <tbody className='body2'>
        <tr>
            <td className='eachrow'><img className='imglogo' src={img1} alt="" /> Avengrs Black Widow</td>
          <td style={{display:"flex"}}>
            <button style={{marginLeft:"25%"}}>ACTION</button>
          <button>BLOCKBUSTER</button>
          </td>
          <td><img className='arrowimg' src={arrow} alt="" />Trending</td>
          <td>590,972,542</td>
          <td>21,452</td>
          <td>21th May,2003</td>
          <td className='viewbutton'><button>view</button></td>
        </tr>
        <tr>
            <td  className='eachrow'><img className='imglogo'  src={img2} alt="" /> After Hours</td>
          <td style={{display:"flex"}}>
            <button style={{marginLeft:"25%"}}>HORROR</button>
          <button>CRIME</button>
          </td>
          <td></td>
          <td>88,458,892</td>
          <td>32,892</td>
          <td>21th May,2003</td>
          <td className='viewbutton'><button>view</button></td>
        </tr>
        <tr>
            <td  className='eachrow'><img className='imglogo'  src={img3} alt="" /> Ant-Man</td>
          <td style={{display:"flex"}}>
            <button style={{marginLeft:"25%"}}>HORROR</button>
          <button>CRIME</button>
          </td>
          <td></td>
          <td>22,008,901</td>
          <td>345,321</td>
          <td>21th May,2003</td>
          <td className='viewbutton'><button>view</button></td>
        </tr>
        <tr>
            <td  className='eachrow'><img className='imglogo'  src={img4} alt="" /> Captain Marvel</td>
          <td style={{display:"flex"}}>
            <button style={{marginLeft:"25%"}}>ACTION</button>
          <button>FANTASY</button>
          </td>
          <td></td>
          <td>80,961</td>
          <td>903</td>
          <td>21th May,2003</td>
          <td className='viewbutton'><button>view</button></td>
        </tr>
        <tr>
            <td  className='eachrow'><img className='imglogo'  src={img5} alt="" /> Grimsby</td>
          <td style={{display:"flex"}}>
            <button style={{marginLeft:"25%"}}>COMEDY</button>
          <button>CRIME</button>
          </td>
          <td><img className='arrowimg' src={arrow} alt="" />Trending</td>
          <td>670,901</td>
          <td>2,453</td>
          <td>21th May,2003</td>
          <td className='viewbutton'><button>view</button></td>
        </tr>
        <tr>
            <td  className='eachrow'><img className='imglogo'  src={img6} alt="" /> Moonlight</td>
          <td >
            <button className='single' >TRUE STORY</button>
            <p className='singletext' >+2more</p>
          </td>
          
          <td><img className='arrowimg' src={arrow} alt="" />Trending</td>
          <td>56,893</td>
          <td>24,512,232</td>
          <td>4th July,2012</td>
          <td className='viewbutton'><button>view</button></td>
        </tr>

      </tbody>
    </Table>
     
    </div>
  )
}

export default Moviecollection
