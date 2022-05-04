import { RootRef, Typography } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'
import { mergeClasses } from '@material-ui/styles'
import React from 'react'

export default function 
() {
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h1'>Browse by sector</Typography>

       <ul className={classes.links}>
        <li><Link to="/">Technology <span>(14)</span></Link></li>
        <li><Link to="/">Engineering <span>(200)</span></Link></li>
        <li><Link to="/">Health <span>(13)</span></Link></li>
         </ul>      
    </div>
  )
}
