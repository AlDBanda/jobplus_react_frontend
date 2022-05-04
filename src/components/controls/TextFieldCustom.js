import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  input: {
    backgroundColor: theme.palette.common.light,
    border: `1px solid ${theme.palette.common.delta}`,
  }
}))

export default function TextFieldCustom(props) {
  const { id, color, size, placeholder, variant, ...other } = props;
  const classes = useStyles();

  return (
    <TextField
      id={id || "filled-basic"}
      color={color || "primary"}
      size={size || "small"}
      label={placeholder}
      variant={variant || "filled"}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  )
}