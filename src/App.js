import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cookie from './components/Cookie';
import Home from './pages/Home';
import JobListings from './pages/JobListings';


function App() {
  let history = useHistory();
  
  
  return (
    <>
    <BrowserRouter history={history}>
     <Navbar />
     <Switch>
       <Route exact path='/' render={props => <Home {...props} />} />
       <Route exact path='/job-listings' render={props => <JobListings {...props} />} />
     </Switch>
     <Cookie />
     <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
