import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Hidden } from '@material-ui/core';
import Filter from './Filter'
import Listing from './Listing'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridGap: '1.2rem',
    ...theme.container,
    marginTop: '1.5rem'
  },
   lblock: {
    gridRow: '1 / 2',
    gridColumn: '1 / 2',
  },
  rblock: {
    gridRow: '1 / 2',
    gridColumn: '2 / 3',
  }
})); 

export default function ListingFilter (props) {
  const classes = useStyles();
  const { components } = props;

  const sectors = [
    { link: '/', name: 'Technology', count: 14 },
    { link: '/', name: 'Engineering', count: 200 },
    { link: '/', name: 'Health', count: 13 },
  ];

  const locations = [
    {link: '/', name: 'Jobs in London', count: 230 },
    {link: '/', name: 'Jobs in West Midlands', count: 40 },
    {link: '/', name: 'Jobs in Yorkshire', count: 25 },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.lblock}>
        <Hidden smDown>
         <Filter title ="Browse by sector" items={sectors} />
         <Filter title ="Browse by location" items={locations} />
        </Hidden>
      </div>
      <div className={classes.rblock}>
        {components.map((comp) =>( 
        comp ))}
      </div>
    </div>
  )
}
