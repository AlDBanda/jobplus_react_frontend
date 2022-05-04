import REACT from 'react'
import Controls from './controls/Controls'
import Typography  from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import { FormatColorTextSharp } from '@material-ui/icons';
import clsx from 'clsx';
import Form from './Form';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1.5rem 0',
  },
   bgWithImage: {
    backgroundImage: 'url(/images/hero-small.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    boxShadow: '0 3000px rgba(0,0,0, 0.5) inset'
   },
   bgPlain: {
    backgroundColor: theme.palette.common.light,
  },
  container: {
    ...theme.container,
  },
  title: {
    ...theme.fonts.extraBold,
    color: theme.palette.common.delta,
    fontSize: '2.5rem',
    lineHeight: '2.8rem',
    maxWidth: '42rem',
    marginBottom: '1.3rem'
  },
   
  grid: {
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, auto) 150px',
      gridGap: '0.5rem',
    }
  },
   button: {
    display: 'grid',
    alignItems: 'end',
  }
}));

export default function Hero(props) {
  const classes = useStyles();
  const { heroType, labelColor } = props;

  return (
    <>
      <Box className={clsx({
        [classes.root]: true, //always applies
        [classes.bgWithImage]: heroType !== 'plain',
        [classes.bgPlain]: heroType === 'plain',
      })}>
        <Box className={classes.container}>
          {
          (heroType !== 'plain')
            ? <Typography className={classes.title}>Connecting candidates to their dream jobs</Typography>
            : ''
        }
        <Form>
          <div className={classes.grid}>
            <Controls.FormGroupCustom>
              <Controls.InputLabelCustom color={labelColor} label="What" />
              <Controls.TextFieldCustom placeholder="Job title, skill or company" />
            </Controls.FormGroupCustom>

            <Controls.FormGroupCustom>
              <Controls.InputLabelCustom color={labelColor} label="Where" />
              <Controls.TextFieldCustom placeholder="Town, city or postcode" />
            </Controls.FormGroupCustom>

            <Controls.FormGroupCustom className={classes.button}>
              <Controls.ButtonCustom text="Search" />
            </Controls.FormGroupCustom>
          </div>
        </Form>

        </Box>
      </Box>
      </>

  
  )
}
