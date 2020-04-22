import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center full-window">
      <div className="text-center display-3 text-danger">
        404 !
        <br />
        Page not found
      </div>
      <div className="mt-3">
        <Link to="/" className="btn btn-lg btn-outline-success">
          HOME
        </Link>
      </div>
    </div>
  );
}

export default Error;
