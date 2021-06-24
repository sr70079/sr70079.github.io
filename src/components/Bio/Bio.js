import React from "react";
import smphoto from "./images/personal-photo.jpeg"

function Bio (props) {
  return (
    <div className="container">
        <section id="main-bio">

            <div className="container mb-5">

                <div className="row">

                    <div className="col-6">
                        <img className="img-fluid" src={smphoto} alt="Responsive" id="profile" size="100px" />
                    </div>

                    <div className="col-6">
                        <p>
                        I have always worked in jobs and careers that involved customer service and hospitality. However, recently I have completed a coding bootcamp through UNC Chapel Hill to become a full stack developer.  
                        I aspire to take what I know from the hospitality and service industry and apply it to the web developing world. I have experience engaging with a wide range of people and love finding solutions to new problems. I love any kind of puzzle and look forward to designing my own code and building something beautiful. I am very detail oriented and work well under pressure while handling multiple tasks at once and accepting change as it happens.</p>

                        <h4>Strengths</h4>

                        <ul>
                            <li>
                                Detail Oriented
                            </li>
                            <li>
                                Independant Worker
                            </li>
                            <li>
                                Problem Solver
                            </li>
                            <li>
                                Excellent Interpersonal Skills
                            </li>
                            <li>
                                Fun and Lovable
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </section>
    </div>
  );
}

export default Bio;


