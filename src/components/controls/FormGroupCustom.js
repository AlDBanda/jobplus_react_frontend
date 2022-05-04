import React from 'react'
import { makeStyles } from '@material-ui/core'
import { FormGroup } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '16px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '10px',
    },
  }
}))

export default function FormGroupCustom (props) {
  const classes = useStyles();
  const { children, ...other } = props;


  return (
    <FormGroup className={classes.root} {...other}>
      {children}
    </FormGroup>
  )
}
