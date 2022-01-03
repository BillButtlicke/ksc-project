import React from "react";
import axios from "axios";
import Header from "./Header.js";
import { Button, Input, Form } from "reactstrap";
import "./Body.css";

function UploadPage() {
  const submitHandler = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      const url = "https://localhost:4000/api/csv/upload";
      const formData = { file: e.target.result };
      return axios
        .post(url, formData)
        .then((response) => console.log("result", response))
        .catch((error) => console.log(error));
    };
  };
  return (
    <div>
      <Header />
      <Form>
        <Input type="file" name="fileForCSV" />
        <Button color="primary" onClick={submitHandler}>
          Click Here To Upload!
        </Button>
      </Form>
    </div>
  );
}

export default UploadPage;
