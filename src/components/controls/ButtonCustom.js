import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '16px',
    backgroundColor: theme.palette.common.contrast,
    color: theme.palette.common.light,
    padding: '13px 20px',
    borderRadius: 0,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.common.contrast,
    }
  }
}))

export default function ButtonCustom(props) {
  // object deconstructing
  const { text = 'Submit', ...other } = props;
  const classes = useStyles();
  
   return (
    <Button
      classes={{ root: classes.root }}
      {...other}>
      {text}
    </Button>
  )
}
