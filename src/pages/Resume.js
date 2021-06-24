import React from "react";
import resume from "./images/resume.pdf"

function Resume() {
    return (
        <div className="container">
            <h1>Sarah Marshall Resume</h1>
            <iframe src={resume} width="100%" height="1000px">
            </iframe>
        </div>
 
  );
  }

  export default Resume;