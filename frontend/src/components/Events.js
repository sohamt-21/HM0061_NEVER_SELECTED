import React from 'react'
import Cards from './Cards'

const Events = () => {
  return (
    <div className='events-container'>
        <h1 style={{color:'white',alignSelf:'center'}}>Events</h1>
        <div className='events-cards-conatiner' style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'700px'}}>
                <Cards/>
                <Cards/>
            </div>
    </div>
  )
}

export default Events