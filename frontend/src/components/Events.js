import React from 'react'
import Cards from './Cards'

const Events = () => {
  return (
    <div className='events-container'>
      <h1 style={{ color: 'white', alignSelf: 'center' }}>Events</h1>
      <div className='events-cards-conatiner' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '700px' }}>
        <Cards title={'MLSC'} subtitle={'CodeFest'} imageURL={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAg6lFg3-YaW7dUPng6bLWhZNuOw-DU1_cCuMI02Ul_pkOpOkqk4qmIBzIJ2JRgUxyZ2Y&usqp=CAU'} descrption={'Annual coding competition showcasing innovative web projects.'} />
        <Cards title={'MLSC'} subtitle={'Tech Talks'} imageURL={'https://media.licdn.com/dms/image/D4D22AQEgzmqIIMNMzg/feedshare-shrink_800/0/1707449682217?e=2147483647&v=beta&t=r7-b0o0a7UiXowUE9M7_ZiTwEBYcsMKG3S4TzlRDjOU'} descrption={'Monthly sessions where industry experts share insights on web technologies.'} />
      </div>
    </div>
  )
}

export default Events