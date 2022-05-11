import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TimerIcon from '@material-ui/icons/Timer';
import { Link } from 'react-router-dom';
import Controls from './controls/Controls';

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
  },
  skills:{
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: '0,',
    marginBottom: '20px',
    '& li':{
      backgroundColor: theme.palette.common.skills,
      padding:'7px 9px',
      fontSize: '14px',
      borderRadius: '16px',
      marginRight: '10px',
      marginBottom: '10px',

    }
  },
  apply:{
    marginBottom: '150px'
  }

}));

export default function Listing(props) {
const classes = useStyles();
const { detailed = false } = props;

 return (
   <>
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

       {!detailed ? (
         <>
          <p className={classes.details}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Explicabo, asperiores ullam minus at <b><Link to="/listing-details">Read more...</Link></b>
        </p>
         
         <Link className={classes.cta} to="/">Withdraw application</Link>
         </>
       ) : (
          <Controls.FormGroupCustom className={classes.button}>
            <Controls.ButtonCustom text="Apply Now" />
          </Controls.FormGroupCustom>
       )}

       

       

    </div>

    { detailed ? (
      <>
      <p className={classes.details}>
        Lorem ipsum dolo tirim amufhf elicit. n vitae lacus eget dui convallis sollicitudin. 
        ESed ante risus, aliquet sit amet ex sit amet, interdum aliquam elit. 
        Mauris lacus augue, gravida vitae arcu vel, gravida efficitur massa. 
        Sed in faucibus ipsum. Etiam diam mi, dapibus sed orci et, aliquet fringilla quam. 
        Curabitur ut sapien felis. Sed vehicula sem ut risus vestibulum, eget elementum sapien vulputate. 
        Etiam non interdum metus, in ultricies tellus. Sed efficitur gravida tellus sed viverra. Curabitur est nisl, accumsan et eleifend et, 
        feugiat eget sapien. Nunc arcu lacus, hendrerit vel rutrum sit amet, finibus at nibh.
      </p>

      <p>
rbi eget ipsum accumsan, interdum libero at, tristique risus. In sapien nulla, tempus sed ante a, 
vulputate pulvinar elit. Sed vel risus urna. Praesent consequat posuere leo, eget ullamcorper sem dapibus a. 
Fusce sed orci tempus, efficitur libero in, mattis lectus. Curabitur lectus sapien, porta eget faucibus a, 
commodo eget diam. Duis sagittis vitae nulla ut tristique. Vivamus eget risus a quam gravida cursus. F
usce non mollis erat. 
Praesent facilisis elementum rutrum. Nullam te

      </p>

      <h3>Required skills</h3>

      <ul className={classes.skills}>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>React</li>
        <li>PHP</li>
        <li>C</li>
        <li>Ruby</li>
        <li>Django</li>
        <li>React</li>
        <li>PHP</li>
        <li>Ruby</li>
        <li>Django</li>
        <li>HTML</li>
      </ul>

<div className={classes.apply}>
  <Controls.FormGroupCustom className={classes.button}>
    <Controls.ButtonCustom text="Apply Now" />
  </Controls.FormGroupCustom>
</div>

      </>
    ) : ''}
</>

  )
}
