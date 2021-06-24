import React from "react";
import "./style.css";


function ProjectCard(props) {
  return (
    <div className="card">
      {/* <div className="img-container">
        <img alt={props.title} src={props.thumbnail} />
      </div> */}
      <div className="content">
        <img src={`${process.env.PUBLIC_URL}${props.thumbnail}`} width="550" height="350" />
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>GitHub Link:</strong> <a href={props.repoLink}>{props.repoLink}</a>
          </li>
          <li>
            <strong>Deployed Link:</strong> <a href={props.deployedLink}>{props.deployedLink}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
