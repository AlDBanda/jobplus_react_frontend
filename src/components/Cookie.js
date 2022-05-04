import { AppBar, Collapse, IconButton } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
root: {
  position: 'fixed',
  width: '100%',
  bottom: '50px',
},
standardSuccess: {
  backgroundColor: theme.palette.common.beta,
  color: theme.palette.common.light,
  '& .MuiSvgIcon-root': {
    color: theme.palette.common.light,
  }
}
}))


export default function Cookie()  {
  const classes = useStyles();
  const [open, SetOpen] = useState(true);

  return (
      <AppBar position= 'static' className={classes.root}>
        <Collapse in={open}>
          <Alert classes={{ standardSuccess: classes.standardSuccess }}
          action={
            <IconButton
            arial-label='close'
            color='inherit'
            size='small'
            onClick={() => {
              SetOpen(false);
            }}
            >
              <CloseIcon fontsize='inherit' />
            </IconButton>
          }
          >
            Jobplus uses cookies. By continuing you are agreeing to our use of cookies.
          </Alert>
        </Collapse>
      </AppBar>
  )
}
