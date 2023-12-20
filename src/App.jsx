import "./App.css";
import { Button} from "./components/Button";
import { Alert } from "./components/Alert";

import frown from "./assets/img/frown.svg"
import alertCircle from "./assets/img/alert-circle.svg"
import alertTriangle from "./assets/img/alert-triangle.svg"
import checkCircle from "./assets/img/check-circle.svg"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";



function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {<Button color="#074EE8" />}
      </div>
      <hr />
      <div className="alert-components-section">
        {<Button color="#07A4E8" />}
      </div>
    <hr />
    <Alert color = "#F9C8C8" alertMessage = "This is error alert box" image = {frown}/>
    <Alert color = "#F9D9C8" alertMessage = "This is warning alert box" image = {alertTriangle}/>
    <Alert color = "#F9EBC8" alertMessage = "This is info alert box" image = {alertCircle}/>
    <Alert color = "#CEF7CD" alertMessage = "This is success alert box" image = {checkCircle}/>
  

    </div>
  );
}

export default App;
