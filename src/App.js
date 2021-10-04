import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './DrivingSchool/About/About';
import Contract from './DrivingSchool/Contract/Contract';
import Footer from './DrivingSchool/Footer/Footer';
import Header from './DrivingSchool/Header/Header';
import Home from './DrivingSchool/Home/Home';
import NotFound from './DrivingSchool/NotFound/NotFound';
import ServiceDetails from './DrivingSchool/Services/ServiceDetails/ServiceDetails';
import Services from './DrivingSchool/Services/Services/Services';

function App() {
  return (
    <div className="App">
  <Router>
    <Header/>
     <Switch>
        <Route exact path="/">
              <Home/>
        </Route>
        <Route path="/home">
              <Home/>
        </Route>
        <Route path="/services">
              <Services/>
        </Route>
        <Route path="/about">
              <About/>
        </Route>
        <Route path="/contract">
              <Contract/>
        </Route>
        <Route path="/service/:id">
              <ServiceDetails/>
        </Route>
        <Route exact path="*">
              <NotFound/>
        </Route>
     </Switch>
     
     <Footer/>
  </Router>
    </div>
  );
}

export default App;
