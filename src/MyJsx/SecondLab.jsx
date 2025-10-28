import React from "react"
import click from "../assets/park.png"
import LabSC from "../assets/Screenshot.png"
import LabSS from "../assets/ScreenTwo.png"
import "../Mycss/SecondLab.css";
function SecondLab(){
 
    return(
        <div className="container Lab-Main2">
           <div className="LabLeft-div2">
                    <img src={LabSC} alt="" className="LabLeft-img12" />
                    <img src={LabSS} alt="" className="LabLeft-img22"/>
                </div>
            <div className="Lab-LeftSide2">
                <div className="Lab-coMain2">
            <p className="Lab-p12">Featured  Project</p>
            <p className="Lab-p22">Example Project</p>
            <div className="coMain-pre2">
                <p>A web app for visualizing personalized Spotify data. View your
top artists, top tracks, recently played tracks, and detailed audio
information about each track. Create and save new playlists of
recommended tracks based on your existing playlists and more.</p>
            </div>
            <div className="Lab-Imgs2">
                <img src={click} alt="" />
                <img src={click} alt="" />
            </div>
            </div>
            
            </div>
        </div>
    )
}







export default SecondLab