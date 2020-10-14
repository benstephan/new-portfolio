import React from 'react';
import Hero from '../components/Hero.js';
import Featured from '../components/Featured.js';
import Services from '../components/Services.js';

class Home extends React.Component {
    render() {
        return(
            <>
            <Hero title="An Appetite for Creativity" text="Hi, I am Ben Stephan. A fully rounded creative professional from the always sunny Philadelphia. I specialze in front-end web development but my skills include everything from graphic design to full-stack LAMP and MERN development." />
            <Featured />
            <Services />
            </>
        )
    }
}

export default Home;