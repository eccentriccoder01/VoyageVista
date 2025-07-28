import React from 'react'
import '../CSS/PageNotFound.css'
const PageNotFound = () => {
  return (

    <div className='PageNotFound'>
      <div className='PageNotFoundcard'>
        <div className='404 font-weight-bold h1'>
          <span style={{'color': 'orange'}}>4</span><span style={{'color': 'rgb(232, 232, 232)'}}>0</span><span style={{'color': 'green'}}>4!</span>
        </div>
      <h5 className='font-weight-bold'>OOPS! PAGE NOT FOUND</h5>
      <p>Sorry, the page you're looking for doesn't exist.</p>

      <button class="btn text-white mt-2" style={{"background-color": "rgb(19, 39, 79)"}}>
        <a class="text-white" href="/">Return Home</a>
        </button>
      
      </div>
    </div>
  )
}

export default PageNotFound;