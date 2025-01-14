
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact"
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Projects} />
        <Route path="/aboutus" component={AboutUs}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
