import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './team.scss';


// hero's id number
// thorId = '1009664';
// captainAmericaId = '1009220';
// spiderManId = '1009610';
// ironManId = '1009368';
// captainMarvelid ='1010338';
// blackwidowid ='1009189';

function Team() {
    const [heros, setHeros] = useState([]);

    const spiderManURL = "http://gateway.marvel.com/v1/public/characters/1009610?ts=1&apikey=bfea369635741a24dd07bc483f6eca66&hash=8beb9b74b87efe26d77dd9c490afedb2";
    const ironManURL = "http://gateway.marvel.com/v1/public/characters/1009368?ts=1&apikey=bfea369635741a24dd07bc483f6eca66&hash=8beb9b74b87efe26d77dd9c490afedb2";
    const captainMarvelURL = "http://gateway.marvel.com/v1/public/characters/1010338?ts=1&apikey=bfea369635741a24dd07bc483f6eca66&hash=8beb9b74b87efe26d77dd9c490afedb2";
    const blackwidowidURL = "http://gateway.marvel.com/v1/public/characters/1009189?ts=1&apikey=bfea369635741a24dd07bc483f6eca66&hash=8beb9b74b87efe26d77dd9c490afedb2";


    // Get avengers data from marvel api call

    const requestOne = axios.get(ironManURL);
    const requestTwo = axios.get(blackwidowidURL);
    const requestThree = axios.get(spiderManURL);
    const requestFour = axios.get(captainMarvelURL);

    // useEffect(() => {
    //     axios
    //     .all([requestOne, requestTwo, requestThree, requestFour])
    //     .then(
    //         axios.spread((...responses) => {
    //         const responseOne = setHeros(heros => [...heros, responses[0].data.data.results]);
    //         const responseTwo = setHeros(heros => [...heros, responses[1].data.data.results]);
    //         const responesThree = setHeros(heros => [...heros, responses[2].data.data.results]);
    //         const responesFour = setHeros(heros => [...heros, responses[3].data.data.results]);
    //         })
    //     )
    //     .catch(errors => 
    //         console.error(errors)
    //     )
    // },
    // []);
    
    // console.log(heros);
    return(
        <div className="team">
            <div className="team__header">Meet Your Friendly<br/>Neighborhood Superheroes</div>
            <div className="team__wrapper container">
                {heros.map((item) => 
                    <div className="flip-card">
                        <div className="flip-card__top">
                            <div className="flip-card__inner">
                                <div className="flip-card__front">
                                    <img src={item[0].thumbnail.path + "/portrait_incredible.jpg"} alt="" />
                                </div>
                                <div className="flip-card__back">
                                    <p className="flip-card__description">{item[0].description}</p> 
                                </div>
                            </div>
                        </div>
                        <div className="flip-card__bottom">
                            <h1 className="flip-card__header">{item[0].name}</h1> 
                        </div>
                    </div>
                )}
            </div>
            <button className="btn__secondary">View more</button>
        </div>
    )
}

export default Team;