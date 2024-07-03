import { useState } from "react";

const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [error] = useState("");

  const signIn = () => {
    console.log("Sign in");
    setIsSignedIn(true);
  };

  const signOut = () => {
    console.log("Sign out");
    setIsSignedIn(false);
  };

  return { isSignedIn, error, signIn, signOut };
};

export default useAuth;
