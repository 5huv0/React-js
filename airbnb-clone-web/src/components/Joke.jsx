import React from "react";


export default function Joke(props){
    return(
        <div>
           {props.joke && <h3> joke : {props.joke}</h3>}
            <p>punchline : {props.punchline}</p>
        </div>
        
    )
}