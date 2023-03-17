import React from 'react'
import Table from 'react-bootstrap/Table';
import arrowimg from "../../image/arrow.png"

import "./index.css"
function Movieprop() {
  return (
    <>
   
    <div className='main'>
      <p><b>Movie Properties</b><span><img height="10px"  src={arrowimg} alt="" /> Trending</span> </p>
      <p style={{   position:"relative",
        bottom: "30px",color:"#6A6A6A"
    }}>A list of the details for this movie</p>
      <Table style={{width:"177vh",border:"1px solid #e0e0e0", borderRadius:"10px"}} striped>
      <thead style={{border:"1px solid #e0e0e0"}}>
        <tr>
          <th>Category</th>
          <th>Stream</th>
          <th>Watchlists</th>
          <th>Owner</th>
          <th>Realease Date</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td style={{display:"flex"}}>
            <button style={{marginLeft:"30%"}}>ACTION</button>
          <button>THRRILER</button>
          </td>
          <td>24,512,232</td>
          <td>389,234</td>
          <td>Sony Entertainment</td>
          <td>21th May,2022</td>
        </tr>
       
      </tbody>
    </Table>
    </div>

    <div className='main'>
      <p><b>Interest Tracking Insights</b></p>
      <p style={{   position:"relative",
        bottom: "30px",color:"#6A6A6A"
    }}>Keep track of the insights on this movie</p>
      <Table style={{width:"177vh",border:"1px solid #e0e0e0", borderRadius:"10px"}} striped>
      <thead style={{border:"1px solid #e0e0e0"}}>
        <tr>
          <th>People Reached</th>
          <th>Content Interactions</th>
          <th>Impression</th>
          <th>Shares</th>
          <th>Likes</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>39,823,154</td>
          <td>76,923,304</td>
          <td>101,783,945</td>
          <td>14,895</td>
          <td>34,056,147</td>
        </tr>
       
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default Movieprop
