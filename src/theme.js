import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});

const alpha = '#2C3E50'
const beta = '#0A7ED2'
const gamma = '#1D2730'
const delta = '#EDEDED'
const alert = '#FD5959'
const contrast = '#E84188'
const elements = '#C4C4C4'
const light = '#FFF'
const skills = '#e1e1e1'

export default createTheme({
  typography: {
    fontFamily: 'Open Sans-Regular'
  },
  palette: {
    primary: {
      main: `${alpha}`,
    },
     secondary: {
      main: `${beta}`,
  },
  error:{
    main: `${alert}`,
  },
  common:{
    alpha: `${alpha}`,
      beta: `${beta}`,
      gamma: `${gamma}`,
      delta: `${delta}`,
      alert: `${alert}`,
      contrast: `${contrast}`,
      elements: `${elements}`,
      light: `${light}`,
      skills: `${skills}`,
  },
  background: {
    default:`{$delta}`,
  }
},
fonts: {
    bold: {
      fontFamily: 'OpenSans-Bold',
    },
    extraBold: {
      fontFamily: 'OpenSans-ExtraBold'
    },
    light: {
      fontFamily: 'OpenSans-Light',
    }
  },
  container:{  //container class created globally
    width: '900px',
    margin: '0 auto',
    padding:'0',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
    [breakpoints.down('md')]: {
      padding: '0 20px'
    }
  }
});