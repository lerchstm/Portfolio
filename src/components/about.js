import React from "react"

import {
  MdPerson,
  MdPlace,
  MdInfo
} from "react-icons/md"

import profilePicture from "../images/me.jpg"


const About = () => (
    <div className={"about"} >
        <div className={ "imageCropper"}>
        <img
        className={"imageProfilePicture"}
        alt="Thats Me"
        src={profilePicture}></img>
        </div>
     
        <p>
          <h1>Facts</h1>
        <ul className={"list"}> 
          <li><span className={"listSpan"}>  <MdPerson /></span>my Name is Mika Lerchster</li>
          <li><span className={"listSpan"}> <MdInfo /></span>im 20 Years old</li>
          <li><span className={"listSpan"}> <MdPlace /></span>based in Carinthia (Austria)</li>
        </ul>
        </p>
      </div>
)

export default About
