import React from "react";

function Image(props) {
  return (
    <div className="image-container">
      {console.log(props.url)}
      <img src={props.url} alt="" className="image" />
      <div className="middle">
        <i className="fas fa-expand"></i>
      </div>
    </div>
  );
}

export default Image;
