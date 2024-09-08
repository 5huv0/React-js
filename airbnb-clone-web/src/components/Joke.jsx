import React from "react";


export default function Joke(props){
    return(
        <div>
            <h3>{props.joke}</h3>
            <h1>{props.punchline}</h1>
        </div>
        
    )
}