import React from "react";

export default function Card(props){
    return(
        <div>
            <div className="card">
                {props.openSpot == 0 && <div className="open-spot"> Sold out</div>}
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
