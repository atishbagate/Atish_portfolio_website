
//import pages 
import AboutUs from './pages/AboutUs';
//import Navbar 
import Nav from './components/Nav';
//golbal style
import GlobalStyle from './components/GlobalStyle';
function App() {
  return (
    <div className="App">
    <GlobalStyle/>
    <Nav />
    <AboutUs /> 
    </div>
  );
}

export default App;
