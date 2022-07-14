import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1> Page not found!</h1>
        <h6>Please click here to go to <Link to={"/"}> Home </Link></h6>
      </div>
    </div>
  )
}

export default NoPage