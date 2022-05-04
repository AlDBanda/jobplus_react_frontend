import { makeStyles } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles((theme) => ({

})); 

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.lblock}>
        <p>Filter 1</p>
        <p>Filter 2</p>
      </div>
      <div className={classes.rblock}>
        <p>Listings 1</p>
        <p>Listings 2</p>
      </div>
    </div>
  )
}
