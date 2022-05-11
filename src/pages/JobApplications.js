import React from 'react'
import Hero from '../components/ListingFilter'
import ListingFilter from '../components/ListingFilter'
import Listing from '../components/Listing';



export default function JobApplications () {
  const listings = [<Listing />]
  
  return (
    <>
    <Hero heroType='plain' />
    <ListingFilter components={listings} />

    </>
  )
}
