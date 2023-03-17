
// import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts"
import React from 'react'
import { useState } from 'react';
import "./index.css"



function Areachart() {
 const [area,setArea]=useState(  {options: {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June", "July","August" , "September","October","November","December"]
    }

  
  },
  series: [
    {
      name: "series-1",
      data: [250,255,254,252,256,253,253,251,256,256,260,262]
    }
  ]
}
)
  return (
    <div style={{width:"1200px" ,marginLeft:"20px",border:"2px solid #e5e5e5",borderRadius:"10px"}} >
      <h2>Average watch time</h2>
      <p style={{color:"#6A6A6A"}}>This tracks the average watch by users every month</p>
       <Chart
              options={area.options}
              series={area.series}
              type="area"
              width="1200"
              height="240"
            />
    </div>
  )
}

export default Areachart
