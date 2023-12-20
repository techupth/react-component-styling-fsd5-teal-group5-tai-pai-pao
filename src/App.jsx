import "./App.css";

import Button from "./components/Button"
import {Alert} from "./components/Alert"

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="primary" text="Primary" />
        <Button type="secondary" text="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="error" text="Error Error ErrorError !!!!" />
        <Alert type="warning" text="warning warning warning!!!!" />
        <Alert type="info" text="info info info!!!!" />
        <Alert type="success" text="success success success!!!!" />
      </div>
    </div>
  );
}

export default App;
