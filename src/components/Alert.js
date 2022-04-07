import React from "react";

function Alert({ errorMessage }) {
  return (
    <div className="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  );
}

export default Alert;
