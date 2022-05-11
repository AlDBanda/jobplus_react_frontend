import {  Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import React from 'react'

const useStyles = makeStyles((theme) => ({
 root: {
    backgroundColor: theme.palette.common.light,
    padding: '1rem',
    minWidth: '220px',
    marginBottom: '1rem'
  },
  title: {
    ...theme.fonts.extraBold,
    fontSize: '1rem',
    marginBottom: '0.91rem'
  },
   links: {
    listStyle: 'none',
    padding: 0,
    color: theme.palette.common.beta,
    '& span': {
      color: theme.palette.common.alpha,
    },
    '& li': {
      marginBottom: '0.4rem',
      '& a': {
        textDecoration: 'none',
        color: 'inherit'
      }
    }
  }
}))

export default function Filter(props) {
const classes = useStyles();
const { title, items } = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h1'>{title}</Typography>

       <ul className={classes.links}>
        {items.map((item) => (
          <li><Link to ={item.link}>{item.name} <span>({item.count})</span></Link></li>

        ))}
         </ul>      
    </div>
  )
}
