import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.light,
  },
}))

export default function SelectCustom(props) {
  const { items } = props;

  const classes = useStyles();

  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl variant="outlined" className={classes.root}>
      <Select
        labelId="selctor-label"
        id="sector-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value}
        onChange={handleChange}
      >
        {
          items.map(item => (
            <MenuItem value={item.name}>{item.name}</MenuItem>
          ))
        }
      </Select>
    </FormControl >
  )
}
