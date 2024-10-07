import React from "react";
import MemeData from "./MemeData";

export default function Meme(){

   function GetMeme(){
    const MemeArr = MemeData.data.memes;
    const randomNum = Math.round(Math.random() * MemeArr.length);
    const url = MemeArr[randomNum].url
    console.log(url);
  }

    return (
        <div className="container main-div">
            <div className="meme-input">
                <div className="top-txt">
                    {/* <label htmlFor="shut-up">Top text</label> */}
                    <input type="text" placeholder="Shut Up" id="shut-up"/>
                </div>
                <div className="bottom-txt">
                    {/* <label htmlFor="take-money">Bottom text</label> */}
                    <input type="text" placeholder="And take my money" id="take-money"/>
                </div>
                
            </div>
            <div className="btn">
                <button className="meme-btn" onClick={GetMeme}>
                    Get a new Meme image <img src="" alt="" />
                </button>
            </div>
        </div>
    )
}