import React from 'react'
import ListingFilter from '../components/ListingFilter'
import PageTitle from '../components/PageTitle'
import Listing from '../components/Listing';

export default function SavedJobs() {
  const listings = [<Listing />]
  return (
    <>
       <PageTitle title='Saved Jobs' />
       <ListingFilter components={listings} />
    </>
  )
}
