import React from 'react';
import Hero from '../components/Hero.js';
import AboutText from '../components/AboutText.js';
import AboutTimeline from '../components/AboutTimeline.js';
import Services from '../components/Services.js';
import { Helmet } from 'react-helmet';

class About extends React.Component {
    render() {
        return(
            <>

            <Helmet>
                <title>Ben Stephan Design - About</title>
                <meta name="description" content="The home of Ben Stephan, Web and Graphic Designer" />
            </Helmet>
            <Hero title="About" text="I am passionate about all things creative. Front-end development is my strong suit but my experience and portfolio include graphic design, branding, back-end web development, and many other areas of creativity. " />
            <AboutText />
            <AboutTimeline />
            <Services />
            </>
        )
    }
}

export default About;