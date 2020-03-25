import React from 'react'
import MMJ from '../images/MMJ.jpg'
import Waterfall from '../images/Waterfall.jpg'

const MyMorningJacket = () => {
  return (
    <>
      <h1>My Morning Jacket</h1>
      <p>
        <img src={MMJ} alt="picture of My Morning Jacket" />
      </p>
      <h2>Their Latest Album</h2>
      <h3>Waterfall</h3>
      <p>
        <img
          src={Waterfall}
          alt="album cover for waterfall by my morning jacket"
        />
      </p>
      <p>Walls came out in 2015, and was their eighth studio album</p>
    </>
  )
}

export default MyMorningJacket
