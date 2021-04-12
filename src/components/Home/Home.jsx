import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import Team from '../Team/Team';
import Why from '../Why/Why';

class Home extends Component{
    render() {
        return (
            <>
                <Hero />
                <Why />
                <Team />
            </>
        )
    }
}

export default Home;