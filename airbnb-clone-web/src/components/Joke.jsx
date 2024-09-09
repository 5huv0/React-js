import React from "react";


export default function Joke(props){
    return(
        <div>
           {props.joke && <h3> joke : {props.joke}</h3>}
            <h1>punchline : {props.punchline}</h1>
        </div>
        
    )
}