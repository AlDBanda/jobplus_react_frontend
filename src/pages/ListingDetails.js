import React from 'react'
import Hero from '../components/Hero';
import ListingFilter from '../components/ListingFilter';
import Listing from '../components/Listing';

export default function ListingDetails() {
  const listings = [<Listing detailed={true} />]

  return (
    <>
      <Hero heroType='plain' />
      <ListingFilter components={listings} />
    </>
  )
}