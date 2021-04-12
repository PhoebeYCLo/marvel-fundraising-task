import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './team.scss';

const baseURL = "http://gateway.marvel.com"
const hash = "&hash=5097a7f36c0cb8d468131600e38202b8";
const apiURL = "ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988";
// const apiURL = "/v1/public/comics?ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988";
// const apiURL = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988";
// &hash=5097a7f36c0cb8d468131600e38202b8
// http://gateway.marvel.com/v1/public/characters?ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988&hash=5097a7f36c0cb8d468131600e38202b8
// Get avengers
// http://gateway.marvel.com/v1/public/characters?nameStartsWith=avengers&ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988&hash=5097a7f36c0cb8d468131600e38202b8
// Thor
// `${baseURL}/v1/public/characters/${thorId}?${apiURL}${hash}`
// Hulk
// `${baseURL}/v1/public/characters/${hulkId}?${apiURL}${hash}`
// Supide Man
// `${baseURL}/v1/public/characters/${spiderManId}?${apiURL}${hash}`
// Iron Man
// `${baseURL}/v1/public/characters/${ironManId}?${apiURL}${hash}`


// hero's id number
// const thorId = '1009664';
// const hulkId = '1009351';
// const spiderManId = '1009610';
// const ironManId = '1009368';

function Team() {
    const [heros, setHeros] = useState([]);

    const thorURL = "http://gateway.marvel.com/v1/public/characters/1009664?ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988&hash=5097a7f36c0cb8d468131600e38202b8";
    const hulkURL = "http://gateway.marvel.com/v1/public/characters/1009351?ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988&hash=5097a7f36c0cb8d468131600e38202b8";
    const spiderManURL = "http://gateway.marvel.com/v1/public/characters/1009610?ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988&hash=5097a7f36c0cb8d468131600e38202b8";
    const ironManURL = "http://gateway.marvel.com/v1/public/characters/1009368?ts=1&apikey=37026e8bfbe7312f3b371f690bbb3988&hash=5097a7f36c0cb8d468131600e38202b8";


    // Get avengers data from marvel api call
    
    // useEffect(() => {
    //     axios.get(`${baseURL}/v1/public/characters/${thorId}?${apiURL}${hash}`)
    //     .then((res) => {
    //         setHeros(res.data.data.results);
    //         // console.log(res.data);
    //     }).catch((err) => 
    //         console.log(err)
    //     )},
    // []);

    const requestOne = axios.get(thorURL);
    const requestTwo = axios.get(hulkURL);
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
            
            // setHeros({responseOne}, {responseTwo}, {responesThree}, {responesFour});
            // setHeros(prevHero => [...prevHero, newHero]);
            // use/access the results
            // console.log(responseOne, responseTwo, responesThree, responesFour);
            })
        )
        .catch(errors => 
            // react on errors.
            console.error(errors)
        )
    },
    []);

    // axios
    // .all([requestOne, requestTwo, requestThree, requestFour])
    // .then(
    //     axios.spread((...responses) => {
    //     const responseOne = responses[0];
    //     const responseTwo = responses[1];
    //     const responesThree = responses[2];
    //     const responesFour = responses[3];

    //     // use/access the results
    //     console.log(responseOne, responseTwo, responesThree, responesFour);
    //     })
    // )
    // .catch(errors => {
    //     // react on errors.
    //     console.error(errors);
    // });
    
    

    console.log(heros);
    // console.log(res);
    return(
        <div>
            {heros.map((item) => 
                <div>Name: {item[0].name}
                    {/* <img src={item.thumbnail.path + "/portrait_incredible.jpg"} alt='' /> */}
                </div>
            )}
        </div>
    )
}

export default Team;