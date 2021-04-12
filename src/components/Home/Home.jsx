import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import Why from '../Why/Why';
import Team from '../Team/Team';
import Newsletter from '../Newsletter/Newsletter';
import DonateHero from '../DonateHero/DonateHero';

class Home extends Component{
    render() {
        return (
            <>
                <Hero />
                <Why />
                <Team />
                <Newsletter />
                <DonateHero />
            </>
        )
    }
}

export default Home;