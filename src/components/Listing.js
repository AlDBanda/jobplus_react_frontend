import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TimerIcon from '@material-ui/icons/Timer';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.common.beta}`,
    backgroundColor: theme.palette.common.light,
    padding: '15px',
    borderRadius: '3px',
    boxShadow: `1px 2px 3px 1px ${theme.palette.common.elements}`,
    marginBottom: '20px'
  },
  header: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, auto)',
    gridTemplateColumns: 'repeat(2, auto)',
  },
  title: {
    gridRow: '1 / 2',
    gridColumn: '1 / 2',

    ...theme.fonts.extraBold,
    fontSize: '1.1rem',
    color: theme.palette.common.beta,
  },
  saved: {
    gridRow: '1 / 2',
    gridColumn: '2 / 3',
    justifySelf: 'right',
    fontSize: '30px',
  },
  company: {
    gridRow: '2 / 3',
    gridColumn: '1 / 2',
    fontSize: '0.8rem',
    margin: 0,
    '& span': {
      color: theme.palette.common.beta,
    }
    },
  items: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '0.5rem',
    listStyle: 'none',
    margin: '1.2rem 0',
    padding: 0,
    '& li': {
      display: 'flex',
      '& svg': {
        fontSize: '20px',
        marginRight: '0.5rem',
      }
    },
    '& li:nth-of-type(2)': {
      justifySelf: 'right'
    }
  },
  details: {
    fontSize: '0.9rem',
    marginBottom: 0,
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    }
  },
  cta: {
    fontSize: '0.9rem',
    textAlign: 'right',
    display: 'block',
    color: 'inherit',
  }

}));

export default function Listing() {
const classes = useStyles();

 return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography className={classes.title} variant='h1'>Regulatory Affairs Senior Manager</Typography>
        <StarIcon className={classes.saved} />
          <p className={classes.company}>Posted by <span>Koco Media</span></p>
      </header>

      <ul className={classes.items}>
        <li><AttachMoneyIcon /><b>Salary negotiable</b></li>
          <li><LocationOnIcon />Heyes, <b>Uxbridge</b></li>
          <li><TimerIcon />Contract, full-time</li>
      </ul>

       <p className={classes.details}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Explicabo, asperiores ullam minus at <b><Link to="/">Read more...</Link></b>
        </p>

        <Link className={classes.cta} to="/">Withdraw application</Link>

    </div>
  )
}
