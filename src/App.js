import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Nav/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Portfolio";
import Resume from "./pages/Resume"
import Contact from "./pages/Contact";
import Footer from "./components/StickyFooter/StickyFooter";



function App() {

  return (
    <div>

        <Switch>
          <NavBar />
          {/* <Router> */}
            <Route exact path = "/" component = {Home}/>
            <Route path = "/portfolio" component = {Projects}/>
            <Route path = "/resume" component = {Resume}/>
            <Route path = "/contact" component = {Contact}/>
          {/* </Router> */}
          <Footer />
        </Switch>

    </div>
  );
}

export default App;