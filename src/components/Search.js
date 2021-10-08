import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {

    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    console.log(results);

    useEffect(() =>{
        const search = async () => {    // recommmended approach to use async inside useEffect hook
            const { data }= await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search)

        };

        const timeoutId= setTimeout(()=>{
            if(term){       // if term is an empty string do not search to prevent error
                search()
            }
        }, 700);

        return ()=> {
            clearTimeout(timeoutId)
        };

    }, [term]); // whenever we re-render the component and term has changed, run the arrow function

    // render results
    const renderedResults = results.map((result)=>{
        return(
            <div key={ result.pageid } className= "item">
                <div className="right floated content">
                    <a  className="ui button"
                        href= {`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        go
                    </a>
                </div>
                <div className= "content">
                    <div className= "header">
                        { result.title }
                    </div>
                    <div dangerouslySetInnerHTML= {{__html: result.snippet}}></div>
                </div>
            </div>
        )
    })

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
            <div className="ui celled result">
                { renderedResults }
            </div>
        </div>
    )
}

export default Search
