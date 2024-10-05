import React from "react";

export default function Meme(){
    return (
        <div className="container main-div">
            <div className="meme-input">
                <input type="text" placeholder="Shut Up"/>
                <input type="text" placeholder="And take my money"/>
            </div>
            <div className="meme-btn">
                <button>
                    Get a new Meme image <img src="" alt="" />
                </button>
            </div>
           
        </div>
    )
}