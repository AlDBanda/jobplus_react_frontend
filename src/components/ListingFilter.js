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

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.lblock}>
        <Hidden smDown>
         <Filter />
         <Filter />
        </Hidden>
      </div>
      <div className={classes.rblock}>
        <Listing />
        <Listing />
      </div>
    </div>
  )
}
