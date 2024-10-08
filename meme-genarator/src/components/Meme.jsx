import React from "react";
import MemeData from "./MemeData";

export default function Meme(){


const [getMemeimg, setgetMemeimg] = React.useState("")

   function GetMeme(){
    const MemeArr = MemeData.data.memes; //This will take data from my data file  
    const randomNum = Math.round(Math.random() * MemeArr.length); //Generated a random number 
    const url = MemeArr[randomNum].url; //putting url from memedata in MemeArr's random index
    setgetMemeimg(url);
  }

  


    return (
        <div className="container main-div">
            <div className="meme-input">
                <div className="top-txt">
                    <input type="text" placeholder="Shut Up" id="shut-up"/>
                </div>
                <div className="bottom-txt">
                    <input type="text" placeholder="And take my money" id="take-money"/>
                </div>
                
            </div>
            <div className="btn">
                <button className="meme-btn" onClick={GetMeme}>
                    Get a new Meme image <img src="" alt="" />
                </button>
            </div>

            <div className="meme-sec">
                <img src={getMemeimg} alt="" className="meme-img"/>
            </div>
        </div>
    )
}