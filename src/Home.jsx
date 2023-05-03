import React from 'react'

function Home(userDetails) {
  return (
      <div>
          <h2>From Home Conttainer</h2> 
          <p>{userDetails.userDetails.firstName}</p>
          <p>{userDetails.userDetails.lastName}</p>  
          <p>{userDetails.userDetails.Age}</p>  
          <p>{userDetails.userDetails.Gender}</p>  
    </div>
  )
}

export default Home
