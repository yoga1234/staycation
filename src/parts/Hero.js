import React from 'react'

import ImageHero from 'assets/images/img-hero.jpg'
import Imagehero_ from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/icon-cities.svg'
import IconTraveler from 'assets/images/icon-traveler.svg'
import IconTreasure from 'assets/images/icon-treasure.svg'

import Button from 'elements/Button'

export default function Hero() {

  function showMostPicked() {

  }
  return (
    <section classNames="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 422 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
          </p>
          <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
            Show Me Now
          </Button>
        </div>
      </div>
    </section>
  )
}
