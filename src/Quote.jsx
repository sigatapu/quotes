import React from 'react'

const Quote = (props) => {
  return (
    <div className='quote'>
      <h3>{props.day}</h3>
      <p>{props.quote}</p>
    </div>
  )
}

export default Quote
