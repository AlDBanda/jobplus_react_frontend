import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '33px'
  },
}))

export default function CheckboxCustom(props) {
  const classes = useStyles();
  const { value } = props;

  return (
    <FormControlLabel
      value={value}
      control={<Checkbox color="primary" />}
      label={value}
      labelPlacement="end"
      classes={{ root: classes.root }}
    />
  )
}