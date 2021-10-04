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
              {/* Default Showing Home Page */}
              <Home/>
        </Route>
        <Route path="/home">
              {/* Home Page  */}
              <Home/>
        </Route>
        <Route path="/services">
               {/* Services Main Courses  */}
              <Services/>
        </Route>
        <Route path="/about">
              {/* About Us Component */}
              <About/>
        </Route>
        <Route path="/contract">
              {/* Contract Us Component  */}
              <Contract/>
        </Route>
        <Route path="/service/:id">
              {/* Service Details Dynamic Routing  */}
              <ServiceDetails/>
        </Route>
        <Route exact path="*">
              {/* Page Not Found Error Component  */}
              <NotFound/>
        </Route>
     </Switch>
     
     <Footer/>
  </Router>
    </div>
  );
}

export default App;
