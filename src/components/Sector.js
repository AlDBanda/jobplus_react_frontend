import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.container,
    marginBottom: '150px'
  },
  caption: {
    margin: '1.5rem 0',
    textAlign: 'center',
    ...theme.fonts.light,
    '& h2': {
      fontSize: '2.4rem',
    },
    '& h6': {
      fontSize: '1.2rem',
    }
  },
  types: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridColumnGap: '0.8rem',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    }
  },
  wrap: {
    display: 'grid'
  },
  picture: {
    gridRow: '1 / 2',
    gridColumn: '1 / 2',
    filter: 'brightness(40%)',
    '& img': {
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        objectFit: 'cover',
        height: '200px'
      },
      [theme.breakpoints.down('xs')]: {
        objectFit: 'cover',
        height: '130px'
      }
    }
  },
  name: {
    gridRow: '1 / 2',
    gridColumn: '1 / 2',
    alignSelf: 'center',
    justifySelf: 'center',
    zIndex: 1,
    ...theme.fonts.extraBold,
    fontSize: '1.6rem',
    margin: 0,
    color: theme.palette.common.light,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginTop: 3,
    fontSize: '1rem',
    '& a': {
      textDecoration: 'none',
      color: theme.palette.common.beta,
      '&:hover': {
        textDecoration: 'none'
      },
    },
    '& li': {
      marginTop: '0.4rem'
    },
    '& span': {
      color: theme.palette.common.alpha,
      fontSize: '0.9rem'
    },
  },
  allSectors: {
    '& .MuiButton-outlinedPrimary': {
      width: '100%',
      backgroundColor: theme.palette.common.light,
      color: theme.palette.common.beta,
      marginTop: '15px',
      border: `1px solid ${theme.palette.common.beta}`
    }
  }
}))

export default function Sector() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.caption}>
        <Typography variant="h2">Choose your sector</Typography>
        <Typography variant="h6">
          Jobs across multiple sectors. See the latest roles now
        </Typography>
      </div>

      <div className={classes.types}>
        <div className={classes.wrap}>
          <div className={classes.picture}>
            <img src={'images/tech-big.jpg'} alt={'technology'} />
          </div>

          <p className={classes.name}>Technology</p>

          <Hidden smDown>
            <ul className={classes.list}>
              <li><Link to='/'>Accountancy jobs <span>(5,757)</span></Link></li>
              <li><Link to='/'>Acturial jobs <span>(5,757)</span></Link></li>
              <li><Link to='/'>Admin, Secretarial jobs <span>(5,757)</span></Link></li>
            </ul>
          </Hidden>
        </div>

        <div className={classes.wrap}>
          <div className={classes.picture}>
            <img src={'images/eng-big.jpg'} alt={'engineering'} />
          </div>

          <p className={classes.name}>Engineering</p>

          <Hidden smDown>
            <ul className={classes.list}>
              <li><Link to='/'>Accountancy jobs <span>(5,757)</span></Link></li>
              <li><Link to='/'>Acturial jobs <span>(5,757)</span></Link></li>
              <li><Link to='/'>Admin, Secretarial jobs <span>(5,757)</span></Link></li>
            </ul>
          </Hidden>
        </div>

        <div className={classes.wrap}>
          <div className={classes.picture}>
            <img src={'images/health-big.jpg'} alt={'health'} />
          </div>

          <p className={classes.name}>Health</p>

          <Hidden smDown>
            <ul className={classes.list}>
              <li><Link to='/'>Accountancy jobs <span>(5,757)</span></Link></li>
              <li><Link to='/'>Acturial jobs <span>(5,757)</span></Link></li>
              <li><Link to='/'>Admin, Secretarial jobs <span>(5,757)</span></Link></li>
            </ul>
          </Hidden>
        </div>
      </div>

      <Hidden mdUp>
        <div className={classes.allSectors}>
          <Button variant="outlined" color="primary">
            Browse all sectors
          </Button>
        </div>
      </Hidden>

    </div>
  )
}