import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import Team from '../Team/Team';

class Home extends Component{
    render() {
        return (
            <>
                <Hero />
                <Team />
            </>
        )
    }
}

export default Home;