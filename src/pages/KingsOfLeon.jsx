import React from 'react'
import { Link } from 'react-router-dom'
import Kings from '../images/Kings.jpg'
import Walls from '../images/Walls.jpg'
const KingsOfLeon = () => {
  return (
    <>
      <section>
        <h1>Kings Of Leon</h1>
        <p>
          <img src={Kings} alt="picture of kings of leon from 2008" />
        </p>
        <h2>Their Latest Album</h2>
        <h3>Walls</h3>
        <p>
          <img src={Walls} alt="album cover for walls by kings of leon" />
        </p>
        <p>Walls came out in 2016, and was their seventh studio album</p>
      </section>
    </>
  )
}

export default KingsOfLeon
