"use client";
import { Alert } from "@metrostar/comet-uswds";
import "./styles.scss";
import useAuth from "./hooks/use-auth";

export default function Page() {
  const { isSignedIn } = useAuth();
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>Welcome Guest</h1>
        </div>
      </div>
      {!isSignedIn && (
        <div className="grid-row">
          <div className="grid-col">
            <Alert id="sign-in-alert" type="info">
              You are not currently signed in. Please Sign In to access the
              Dashboard.
            </Alert>
          </div>
        </div>
      )}
    </div>
  );
}
