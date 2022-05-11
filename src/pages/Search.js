
import React from 'react'
import Hero from '../components/Hero'
import Listing from '../components/Listing'
import ListingFilter from '../components/ListingFilter'

export default function Search () {
  const listings = [<Listing />]
  return (
    <>
      <Hero heroType= 'plain' />
      <ListingFilter components={listings} />
    </>
  )
}
