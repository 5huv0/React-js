import React from "react";


export default function Joke(props){
    return(
        <div>
            {props.setup && <h3> joke : {props.setup}</h3>}
            <p>punchline : {props.punchline}</p>
            <hr />
        </div>
        
    )
}