
//import pages 
import AboutUs from './pages/AboutUs';
//import Navbar 
import Nav from './components/Nav';
//contact us and our Work import 
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
//golbal style
import GlobalStyle from './components/GlobalStyle';
//movie details 
import MovieDetail from './pages/MovieDetails'
//Router 
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <GlobalStyle/>
    <Nav />
    <Switch>
    <Route path="/" exact>
    <AboutUs /> 
    </Route>
    <Route path="/work" exact>
    <OurWork />
    </Route>
    <Route path="/work/:id">
    <MovieDetail />
    </Route>  
    <Route path="/contact">
    <ContactUs />
    </Route>
    </Switch>
    </div>
  );
}

export default App;
