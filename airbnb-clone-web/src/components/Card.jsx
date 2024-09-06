import React from "react";

export default function Card(){
    return(
        <div>
            <div className="card">
            <img className="card-img-top" src="./src/pics/pic4.png" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Katie</h5>
                <p className="card-text">DO the course with katie.</p>
                <p><b>From 130$/person</b></p>
            </div>
            </div>
        </div>
    )
}