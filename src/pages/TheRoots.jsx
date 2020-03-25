import React from 'react'
import Roots from '../images/Roots.jpg'
import shoot from '../images/shoot.jpg'

const TheRoots = () => {
  return (
    <>
      <h1>The Roots</h1>
      <p>
        <img src={Roots} alt="picture of kings of leon from 2008" />
      </p>
      <h2>Their Latest Album</h2>
      <h3>...and then you shoot your cousin</h3>
      <p>
        <img
          src={shoot}
          alt="album cover for '...and then you shoot your cousin' by the roots"
        />
      </p>
      <p>Walls came out in 2014, and was their twelfth studio album</p>
    </>
  )
}

export default TheRoots
