import React from "react";
import { BrowserRouter as Router , Route } from "react-router-dom";
import NavBar from "./components/Nav/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Portfolio";
import Resume from "./pages/Resume"
import Contact from "./pages/Contact";
import Footer from "./components/StickyFooter/StickyFooter";



function App() {

  return (
    <div>
      <NavBar />
      <Router>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/portfolio" component = {Projects}/>
        <Route exact path = "/resume" component = {Resume}/>
        <Route exact path = "/contact" component = {Contact}/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;