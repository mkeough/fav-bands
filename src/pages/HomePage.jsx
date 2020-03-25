import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1>Here Are My Three Favorite Bands</h1>
      <ul>
        <li>
          <Link to="/kingsofleon">Kings Of Leon</Link>
          <p>
            This band is made up of three Followhill brothers-- Caleb(guitar and
            vocals), Nathan(drums), and Jared(bass)-- as well as their first
            cousin Matthew(guitar). "Initially embraced as 'the southern
            Strokes' for their resurrection and reinvention of Dixie-styled rock
            & roll, Kings of Leon steadily morphed into an experimental rock
            outfit during the 2000's" - Andrew Leahey
          </p>
        </li>
        <li>
          <Link to="/mymorningjacket">My Morning Jacket</Link>
          <p>
            Starting in the late '90s and throughout the 2000s and 2010s, My
            Morning Jacket expanded on their rock and country roots, embracing
            everything from neo-psychedelia to funk, prog, and reggae in their
            sonic experimentation. By the time Evil Urges arrived in mid-2008,
            they had successfully molded themselves into Kentucky's answer to
            Wilco: a band rooted in alt-country and rock & roll, but given to
            sonic experimentation and unexpected genre changes at every turn.
            -Andrew Leahey
          </p>
        </li>
        <li>
          <Link to="/theroots">The Roots</Link>
          <p>
            One of the most prolific rap groups, the Roots were also among the
            most progressive acts in contemporary music, from their 1993 debut
            through their conceptual 2010s releases. Despite the seemingly
            archaic practice of functioning as a rap band with several
            instrumentalists -- from 2007 onward, their lineup even featured a
            sousaphonist -- they were ceaselessly creative, whether with their
            own material, or through their varied assortment of collaborations.
            They went platinum and gold with successive studio releases and won
            a handful of Grammy awards. After they gained a nightly nationwide
            audience through a close partnership with television host Jimmy
            Fallon, they continued to challenge listeners with works free of
            genre restrictions. - Andrew Leahey
          </p>
        </li>
      </ul>
    </>
  )
}

export default HomePage
