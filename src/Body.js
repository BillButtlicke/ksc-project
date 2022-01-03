import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Body.css";

function Body() {
  return (
    <div>
      <Link to="/waitingpage">
        <Button color="primary">Click Here To Download The Data</Button>
      </Link>
    </div>
  );
}

export default Body;
