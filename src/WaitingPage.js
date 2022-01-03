import React from "react";
import { Navigate } from "react-router-dom";

function WaitingPage() {
  return (
    <div>
      <center>
        <h1>
          Download will commence soon. Will redirect to upload page in a bit!
        </h1>
        <Navigate to="/uploadpage" />
      </center>
    </div>
  );
}

export default WaitingPage;
