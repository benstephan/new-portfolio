import React from 'react';
import Hero from '../components/Hero.js';
import PortfolioWeb from '../components/PortfolioWeb.js';
import PortfolioGraphic from '../components/PortfolioGraphics.js';
import { Helmet } from 'react-helmet';

class Bemarketing extends React.Component {
    render() {
        return(
            <>
            <Helmet>
                <title>Ben Stephan Design - Portfolio</title>
                <meta name="description" content="The home of Ben Stephan, Web and Graphic Designer" />
            </Helmet>
            <Hero title="Portfolio" text="Welcome to my portfolio. This page features the spectrum of client work I have completed over the course of my career. The work spans every aspect of my skillset, from front-end web development to graphic design." />
            <PortfolioWeb />
            <PortfolioGraphic />
            </>
        )
    }
}

export default Bemarketing;