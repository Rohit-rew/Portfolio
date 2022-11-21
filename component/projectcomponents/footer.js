import { ProjectContext } from "../../lib/contextapi/projectfilter";
import React from "react";

export default function Footer() {
  const { clickhandler, filter } = React.useContext(ProjectContext);

  const techarray = ["Css" , "Javascript" , "Nodejs" , "React" , "Redux" , "All"]

  const buttons = techarray.map((item , i)=>{
      return(
        <button
        key={i}
          style={{ color: `${filter == item.toLowerCase() ? "orange" : "white"}` }}
          onClick={(e) => clickhandler(item)}
        >
          {item}
        </button>

      )
  })

  return (
    <div className="project-footer">
      <div className="p-footer-nav">
        {buttons}
      </div>
    </div>
  );
}
