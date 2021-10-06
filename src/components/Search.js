import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {

    const [term, setTerm] = useState("");

    useEffect(() =>{
        const search = async () => {    // recommmended approach to use async inside useEffect hook
            await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
        };
        search()

    }, [term]) // whenever we re-render the component and term has changed, run the arrow function

    return (
        <div>
            <div className= "ui form">
                <div className= "field">
                    <label>Search</label>
                    <input 
                        className= "input"
                        value= {term}
                        onChange= {e => setTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Search
