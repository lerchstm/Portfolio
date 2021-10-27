import React from "react"


const Career = () => (
    <div className="career">
        <div className="innerContainer">
            <div className="chapter" id="chapter" onClick={rotate}>
                <div className="front">
                    <p className="title">Chapter 0</p>
                </div>
                <div className="back">
                    <p className="text">HTL Villach 5 Years</p>
                </div>
            </div>
            <div className="chapter" id="chapter" onClick={rotate}>
                <div className="front">
                    <p className="title">Chapter 1</p>
                </div>
                <div className="back">
                    <p className="text">HTL Villach 5 Years</p>
                </div>
            </div>
        </div>
    </div>
)

const rotate = () => {
    var chapter = document.getElementById("chapter");
    
    if(chapter != null){
        chapter.classList.toggle("flipChapter")
    }

}

export default Career
