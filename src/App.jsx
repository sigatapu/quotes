import React from 'react'
import {data} from './data'
import './App.css'
import Quote from './Quote'

function App() {
  

  return (
    <>
    <div className="bg">
    {
      data.map(
        (i)=><Quote day={i.id} quote={i.quote} />
      )
    }
    </div>
      
    </>
  )
}

export default App
