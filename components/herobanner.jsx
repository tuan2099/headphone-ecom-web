import React from 'react'
import Link from 'next/link'
import {urlFor } from '../lib/client'


function Herobanner({herobanner}) {
  console.log(herobanner)
  return (
    <div className = "hero-banner-container">
      <div>
        <p className = "beats-solo">{herobanner.smallText}</p>
        <h3>{herobanner.midText}</h3>
        <h1>{herobanner.largeText1}</h1>
        <img src = {urlFor(herobanner.image)} alt = "ảnh" className = "hero-banner-image"/>
        <div>
          <Link href = {`product/${herobanner.product}`}>
            <button type = "button" className = "">{herobanner.buttonText}</button>
          </Link>
        </div>
        <div className = "desc">
          <h5> description</h5>
          <p>{herobanner.desc}</p>
        </div>
      </div>

    </div>
  )
}

export default Herobanner