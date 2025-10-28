import React from "react"
import click from "../assets/park.png"
import LabSC from "../assets/Screenshot.png"
import LabSS from "../assets/ScreenTwo.png"
import "../Mycss/Lab.css";
import SecondLab from "./SecondLab";
function Lab(){
 
    return(
        <>
        <div className="container Lab-Main">
            <div className="Lab-coMain">
            <p className="Lab-p1">Featured  Project</p>
            <p className="Lab-p2">Example Project</p>
            <div className="coMain-pre">
                <p>A web app for visualizing personalized Spotify data. View your
top artists, top tracks, recently played tracks, and detailed audio
information about each track. Create and save new playlists of
recommended tracks based on your existing playlists and more.</p>
            </div>
            <div className="Lab-Imgs">
                <img src={click} alt="" />
                <img src={click} alt="" />
            </div>
            </div>
            <div className="Lab-LeftSide">
                <div className="LabLeft-div">
                    <img src={LabSC} alt="" className="LabLeft-img1" />
                    <img src={LabSS} alt="" className="LabLeft-img2"/>
                </div>
            </div>
        </div>
        <SecondLab/>
        </>
    )
}







export default Lab