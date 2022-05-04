import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { InputLabel } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '5px',
    ...theme.fonts.bold,
  },
  primary: {
    color: theme.palette.common.alpha,
  },
  secondary: {
    color: theme.palette.common.light,
  },
  default: {
    color: theme.palette.common.alpha,
  }
}))

export default function InputLabelCustom(props) {
  const classes = useStyles();
  const { label, color } = props;

  return (
    <div>
      <InputLabel className={clsx({
        [classes.root]: true, //always applies
        [classes.primary]: color === 'primary',
        [classes.secondary]: color === 'secondary',
        [classes.default]: color === undefined,
      })}>{label}</InputLabel>
    </div>
  )
}