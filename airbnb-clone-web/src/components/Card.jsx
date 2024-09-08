import React from "react";

export default function Card(props){
    return(
        <div className="main-card">
            <div className="card">
                <img className="card-img-top" src={props.img}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.des}</p>
                    <p><b>{props.price}</b></p>
                </div>
            </div>
        </div>
    )
}
