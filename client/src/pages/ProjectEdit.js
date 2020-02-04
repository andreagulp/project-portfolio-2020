import React from "react";

function ProjectEdit(props) {
  const projectId = props.match.params.projectid;
  console.log("props", props.match.params.projectid);

  return (
    <div>
      <h4>Hello ProjectEdit : {projectId}</h4>
    </div>
  );
}

export default ProjectEdit;
