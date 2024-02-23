import React from 'react'
import Cards from './Cards'

const Achievement = ({clubnameA}) => {
  return (
    <div className='achievement-container'>
        <h1 style={{color:'white',alignSelf:'center'}}>Achievement</h1>
            <div className='achievement-cards-conatiner' style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'700px'}}>
                <Cards title={clubnameA} subtitle={'SIH'} imageURL={'https://media.licdn.com/dms/image/C4D22AQGioFRa_pC1BQ/feedshare-shrink_2048_1536/0/1638208914577?e=2147483647&v=beta&t=JX-DtpB0TM_4S4lgQ5nmg7_kHMjPFdHvfooub41aPgw'} descrption={'Our team won SIH 2023 with in multiple domains'}/>
                <Cards title={clubnameA} subtitle={'BlockChain Development'} imageURL={'https://media.licdn.com/dms/image/C4D22AQGioFRa_pC1BQ/feedshare-shrink_2048_1536/0/1638208914577?e=2147483647&v=beta&t=JX-DtpB0TM_4S4lgQ5nmg7_kHMjPFdHvfooub41aPgw'} descrption={'Club dedicated to blockchaindevelopment and have great team.'}/>
            </div>
    </div>
  )
}

export default Achievement