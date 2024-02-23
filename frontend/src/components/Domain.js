import React from 'react'
import Cards from './Cards';

export default function Domain({clubnameD}) {
    console.log(clubnameD)
    return (
        <div className='domain-container'>
            <h1 style={{color:'white',alignSelf:'center'}}>Domain</h1>
            <div className='domain-cards-conatiner' style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'700px'}}>
                <Cards title={clubnameD} subtitle={'Web Development'} imageURL={'https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg'} descrption={'Club dedicated to exploring and mastering the art of web development.'}/>
                <Cards title={clubnameD} subtitle={'BlockChain Development'} imageURL={'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg'} descrption={'Club dedicated to blockchaindevelopment and have great team.'}/>
            </div>
        </div>
    );
}