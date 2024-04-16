"use client";
import { Alert } from "@metrostar/comet-uswds";
import "./styles.scss";

export default function Page() {
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>Welcome to Comet!</h1>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-col">
          <Alert id="alert" type="info">
            This is a Comet Alert!
          </Alert>
        </div>
      </div>
    </div>
  );
}
