import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Button,
  Input,
} from "reactstrap";
import Select from "react-select";
import { useDropzone } from "react-dropzone";

const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

function BasicDropzone(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div className="dz-thumb" key={file.name}>
      <div className="dz-thumb-inner">
        <img src={file.preview} className="dz-img" alt={file.name} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p className="mx-1"> Click to Upload</p>
      </div>
      <aside className="thumb-container">{thumbs}</aside>
    </section>
  );
}

class RaiseConcernToAESForm extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Raise Form</CardTitle>
          <Button
            className=" btn btn-danger float-right"
            // onClick={() =>
            //   history.push("/app/ro-configuration/List")
            // }
          >
            Back
          </Button>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Concern About</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                name="color"
                options={colourOptions}
              />
            </Col>
            <Col md="6" sm="12" style={{ marginBottom: 15 }}>
              <h5 className="my-1 text-bold-600">Remarks</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>

            <Col lg="12" md="12" sm="12" className="mb-5">
              <Button.Ripple
                color="primary"
                type="submit"
                className="mr-1 mb-1"
              >
                Submit
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}
export default RaiseConcernToAESForm;