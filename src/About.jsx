import React from 'react'

function About(props) {
  return (
      <div>
          <h2>From About Container</h2>
          <p>{props.fname}</p>
          <p>{props.lname}</p>
    </div>
  )
}

export default About
