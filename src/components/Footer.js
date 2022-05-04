import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
root: {
  position: 'fixed', //fixed to particular position on screen
  width: '100%',
  bottom: '0px', //counting from bottom going up
  backgroundColor: theme.palette.common.alpha,
  color: theme.palette.common.light, //color of text
  textAlign: 'centre',
  padding: '15px', //adding spacing aroung it
}
}))

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>COPYRIGHT &copy; JobPlus 2022</div>
  )
}
