import React from "react"

import {
  MdPerson,
  MdPlace,
  MdInfo
} from "react-icons/md"

import profilePicture from "../images/me2.jpg"



const About = () => (
    <div className={"about"} >
      <div className={"innerContainer"}>
        <img
        className={"profilePicture"}
        alt="Thats Me"
        src={profilePicture}></img>

        <div className="aboutSection">
          <div className="title">About</div>
          <p className="text">
            Hi everyone. My Name is Mika Lerchster and i'm currently living in Carinthia.
            I attended the HTL for Network Technology in Villach and finished the school
            back in 2019.
          </p>
          <p className="text">
            Currently I'm a full time paramedic which means working 12 hour shifts, driving
            around 300km a day and staying full focused in case of an emergency. I learned
            a lot of things there like being humble, respectful or stress ressistent.
            This job taught me a lot of what it means to work with other people, to rely on them,
            to trust them and i'm very thankfully for this experience. 
          </p>
        </div>
        </div>
      </div>
)

export default About
