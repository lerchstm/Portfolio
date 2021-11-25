import React from "react"

import schoolPicture from "../images/school.jpg"
import redCross from "../images/redcross.jpg"

const Career = () => (
    <div className="careerSection" id="career">
        <div className="carrerBox">
            <div className="chapter">
                <div className="innerChapter">
                    <div className="front">
                    <img src={schoolPicture} alt="schoolPicture" width="500px" height="300px" className="backgroundImage"></img>
                        <p className="title">Chapter 0</p>
                    </div>
                    <div className="back">
                        <div className="innerBack">
                            <div className="title2">HTL Villach - Network Technology</div>
                            <div className="subTitle">September 2014 - July 2019</div>
                            <p className="text">
                            I have been interested in computers since i was a child. Thats why I decided
                            at the age of 13, that I wanna attend the Higher Technical College for Network Technology.
                            The main subjects of these 5 years where I learned the most were Network technology,
                            software developemnt, project management and Databases.
                            I graduated with "guten Erfolg".
                            </p>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="chapter">
                <div className="innerChapter">
                    <div className="front">
                    <img src={redCross} alt="redCross" width="500px" height="300px" className="backgroundImage"></img>
                        <p className="title">Chapter 1</p>
                    </div>
                    <div className="back">
                        <div className="innerBack">
                            <div className="title2">Rotes Kreuz Kärnten</div>
                            <div className="subTitle">November 2019 - Dezember 2021</div>
                            <p className="text">
                                In november 2019, I began my civilian service at the red cross.
                                I finished it in July 2020 and continued to work there fulltime.
                                Back in June 2021, I passed the practical exam for "Sicheren Einsatzfahrer
                                mit Sondersignal" which means i am allowed to drive the medical cars 
                                with "Blaulicht". 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Career
