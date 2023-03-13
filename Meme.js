import React from "react"
import './style.css';
import Memesdata from "./Memesdata";

function Meme(){

    let url
    function getMemeImage() {
        const memesArray = Memesdata.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }
    return (
        <main>
            <p>{url}</p>
            <div className="form"> 
            <input type="text" placeholder="top text" className="form-input"/>
            <input type="text" placeholder="bottom text" className="form-input"/>
            <button type="submit" className="form-button" onClick={getMemeImage}>Get a new image ☯</button>
            </div>
        </main>
    )
}

export default Meme;