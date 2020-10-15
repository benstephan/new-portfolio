import React from 'react';
import { Helmet } from 'react-helmet';
import TagManager from 'react-gtm-module';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import $ from 'jquery';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Post from './pages/Post.js';
import Works from './pages/Work.js';
import Portfolios from './pages/Portfolios.js';
import About from './pages/About.js';


import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

$(window).scroll(function(){
  $("#watermark").css("opacity", .1 - $(window).scrollTop() / $('body').height());
  $("#watermark").css("top", 210 - $(window).scrollTop() / 3);
});
$('.toggle-label').click(function(){
  $('.tech').toggleClass('show');
  $('.design').toggleClass('show'); 
});
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
function App() {
  
  const tagManagerArgs = {
    gtmId: 'GTM-PRWDT5L'
  }

  TagManager.initialize(tagManagerArgs)


  return (
    <>
    
    <Helmet>
      <title>Ben Stephan Design</title>
      <meta name="description" content="The home of Ben Stephan, Web and Graphic Designer" />
    </Helmet>
    
    <Router>
      <div>
      <div id="watermark"><svg viewBox="0 0 253.1 270">
        <title>Ben Stephan Design</title>
        <path className="a" d="M251,124.1v8a8.7,8.7,0,0,0-.9,1.1c-4.8,12.2-13.6,16.3-26.3,12.5a5.85,5.85,0,0,0-3.7,0c-4.7,2.4-9.6,4.7-13.8,7.9-2.4,1.8-5.1,5.3-5,8,0.1,9.3,1.5,18.4,9,25.3,6.1,5.6,7.8,12.7,5.2,20.5a17.82,17.82,0,0,1-15.2,12.7c-8.1,1.1-15.1-1.3-19.2-8.6a12.61,12.61,0,0,0-9.1-6.7c-3.2-.7-6.5-2.2-9.7-2.1s-7.5.9-9.4,3c-5.6,6.3-11.9,12.9-8.7,22.8a10.19,10.19,0,0,1,.1,3.9c-0.9,9.5-7.1,14.5-15.4,17.6h-8c-13.4-6.5-15.2-9.7-14.4-25.2a6.56,6.56,0,0,0-.9-3.3c-1.9-3.7-3.6-7.5-5.8-11-7.1-11.6-25.9-11.4-33.1.2-4.3,6.9-10.7,10.1-18.7,9.1-8.3-1-14-5.7-16.4-14-2.1-7.4.1-15.9,6.4-20.1,4.1-2.8,5.9-6.3,7.3-10.7,5.7-17.3,4-21.3-12.4-29.4a11.91,11.91,0,0,0-8.9-1c-7.1,1.8-13.8.1-18.6-5.7C3,136.1,1.7,132.3-.1,129v-7c0.7-1.5,1.4-2.9,2.1-4.4,3.5-7.7,12.1-12.7,20.4-10.7,4.5,1.1,8-.1,11.7-2,15.4-7.8,17.2-12.1,12-28.5-1.2-3.8-2.7-6.6-6.3-8.9-7-4.5-9.2-11.7-7.7-19.7A17.61,17.61,0,0,1,45.6,33.3c7.8-2.1,15.2-.4,20.1,6.3,2.7,3.7,6,5.3,10,6.6,17.4,5.7,21.7,3.9,29.8-12.6,1.5-3.1,2.4-6,1.6-9.9-2.3-10,2.7-18.4,12.3-22.3C120.3,1,121,.5,121.9,0h8c1,0.5,1.9,1.2,2.9,1.6,9,3.8,14,11.6,11.9,21.1-1.2,5.4.4,9.3,2.6,13.6,7.5,14.6,11.8,16.3,27.5,11.2,3.2-1,5.9-2,7.8-5.4,3.9-7.2,11.5-10.5,19.4-9.2a19,19,0,0,1,15.8,14c2,8.3-.9,16-7.8,21.1a10,10,0,0,0-3.5,3.9,105.63,105.63,0,0,0-4.4,14.2c-1.1,4.9-1,10.1,3.6,13.1,7.6,5,14.6,12,25.1,9.2a7.25,7.25,0,0,1,2.5.2C242.9,109.7,248,115.7,251,124.1ZM62.7,177.9c-0.3,7.8,2.8,10.7,8.3,9.8a54.13,54.13,0,0,0,7.2-1.8c5-1.7,10-3.7,15.1-5.2,7.4-2.2,10.3-1,14,5.7,2.9,5.2,5.2,10.8,8.1,16,2.1,3.8,3.8,8.7,9.3,8.6s7.1-5,9.2-8.8c2.9-5.2,5.1-10.8,8.1-16,3.2-5.6,5.9-6.8,12-5.2,7,1.9,13.9,4.3,20.9,6.6,8.3,2.7,14.6-2.2,11.4-11.3-2.3-6.2-4.4-12.5-6.2-18.9-2.1-7.3-.8-10.2,5.9-13.9,6-3.3,12.3-5.9,18.2-9.3,9-5.1,9-10.6.1-15.7-5.5-3.1-11.4-5.5-16.9-8.5-7.7-4.1-8.9-6.9-6.4-15.5,1.9-6.7,4.5-13.2,6.2-20,2.1-8.4-1.9-12.3-10.3-10-6.6,1.8-12.9,4.4-19.4,6.3-8.1,2.3-11,1.1-15-6.4-2.6-4.8-4.8-9.9-7.3-14.7-2.2-4.1-4.2-9.4-9.4-9.4-5.5,0-7.4,5.5-9.6,9.7-2.3,4.4-4.2,9.1-6.5,13.5-4.2,7.8-7.3,9.1-15.8,6.5-6.4-1.9-12.6-4.4-19-6-9.4-2.3-13.2,1.6-10.8,10.8C66,82,68.5,89.1,70.7,96.2c1.5,5-.1,8.9-4.6,11.5-3.3,1.9-6.8,3.5-10.2,5.3-4.1,2.2-8.4,4.1-12.2,6.7-5.4,3.7-5.3,8.3.1,12a83.23,83.23,0,0,0,11.4,6.1c17.8,8.1,18.3,9.4,11.6,27.9C65,170.5,63.6,175.3,62.7,177.9Z" transform="translate(0.1 0)"></path>
        <path className="d" d="M148.4,123.5c13.2,6.3,14.6,14.5,12.7,23.3-2.2,10.1-10.2,14.2-19.1,14.7-14.2.9-28.5,0.2-43.1,0.2V88h10.9c8.8,0,17.7-.2,26.5.1,9.9,0.3,17.8,5.5,20.3,12.8C159.3,109.2,156.8,116.3,148.4,123.5ZM114.3,148c8.2,0,16.1.3,24-.1,4.1-.2,7.1-2.9,7.5-7.4,0.3-3.9-1.7-7.4-5.5-7.8-8.6-1-17.3-1.1-25.9-1.6C114.3,137.6,114.3,142.6,114.3,148Zm0-30c6.7,0,12.9.3,19-.1,5.1-.3,8.3-3.6,8.3-7.7,0-4.6-2.9-7.4-7-7.7-6.7-.5-13.5-0.1-20.3-0.1V118Z" transform="translate(0.1 0)"></path>
        </svg></div>
        <Navigation />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <Abouts />
          </Route>
          <Route path="/:id">
            <Posts />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
          
        </Switch>
        <Footer />
    
        
      </div>
    </Router>
    </>
  );
}
function Homepage() {
  return <Home />;
}
function Posts() {
  return <Post />
}

function Abouts() {
  return <About />;
}
function Portfolio() {
  return <Portfolios />;
}
function Work() {
  return <Works />
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
