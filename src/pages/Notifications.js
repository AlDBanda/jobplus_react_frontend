import React from 'react'
import ListingFilter from '../components/ListingFilter'
import PageTitle from '../components/PageTitle'
import Listing from '../components/Listing';

export default function Notifications() {
  const listings = [<Listing />]
  return (
    <>
      <PageTitle title='Notification' />
      <ListingFilter components={listings} />
    </>
  )
}
