import React from "react"

/*import {
  MdPerson,
  MdPlace,
  MdInfo
} from "react-icons/md" */

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
            This job taught me what it means to work with other people, to rely on them and
            to trust them in a way you will never experience in an IT job because there is
            life at stake and I'm very thankful for that experience. 
          </p>
          <p className="text">
            I really like being a paramedic but that's just one chapter of my journey and
            I decided for me that now is the time to start a new Chapter. Thats why I'm
            going to move to Graz next year and follow my passion for IT.
          </p>
        </div>
        </div>
      </div>
)

export default About
