import React from 'react'
import Cards from './Cards';

export default function Domain() {
    return (
        <div className='domain-container'>
            <h1 style={{color:'white',alignSelf:'center'}}>Domain</h1>
            <div className='domain-cards-conatiner' style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'700px'}}>
                <Cards/>
                <Cards/>
            </div>
        </div>
    );
}