import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => (
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>
      App that retrieves photos using unsplash API
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="blank" >Learn more</Button>
    </p>
  </Jumbotron>
);
export default Welcome;