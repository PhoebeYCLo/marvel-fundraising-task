import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './team.scss';


// hero's id number
// thorId = '1009664';
// captainAmericaId = '1009220';
// spiderManId = '1009610';
// ironManId = '1009368';

function Team() {
    const [heros, setHeros] = useState([]);

    const thorURL = "http://gateway.marvel.com/v1/public/characters/1009664?ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988&hash=5097a7f36c0cb8d468131600e38202b8";
    const captainAmericaURL = "http://gateway.marvel.com/v1/public/characters/1009220?ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988&hash=5097a7f36c0cb8d468131600e38202b8";
    const spiderManURL = "http://gateway.marvel.com/v1/public/characters/1009610?ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988&hash=5097a7f36c0cb8d468131600e38202b8";
    const ironManURL = "http://gateway.marvel.com/v1/public/characters/1009368?ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988&hash=5097a7f36c0cb8d468131600e38202b8";


    // Get avengers data from marvel api call

    const requestOne = axios.get(thorURL);
    const requestTwo = axios.get(captainAmericaURL);
    const requestThree = axios.get(spiderManURL);
    const requestFour = axios.get(ironManURL);

    useEffect(() => {
        axios
        .all([requestOne, requestTwo, requestThree, requestFour])
        .then(
            axios.spread((...responses) => {
            const responseOne = setHeros(heros => [...heros, responses[0].data.data.results]);
            const responseTwo = setHeros(heros => [...heros, responses[1].data.data.results]);
            const responesThree = setHeros(heros => [...heros, responses[2].data.data.results]);
            const responesFour = setHeros(heros => [...heros, responses[3].data.data.results]);
            })
        )
        .catch(errors => 
            console.error(errors)
        )
    },
    []);
    
    // console.log(heros);
    return(
        <div className="team">
            {heros.map((item) => 
                <div>Name: {item[0].name}
                    <img src={item[0].thumbnail.path + "/portrait_incredible.jpg"} alt='' />
                </div>
            )}
        </div>
    )
}

export default Team;