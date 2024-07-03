import { useState } from "react";

const useAuth = () => {
  const [isSignedIn] = useState(false);

  const signIn = () => {
    console.log("Sign in");
  };

  const signOut = () => {
    console.log("Sign out");
  };

  return { isSignedIn, signIn, signOut };
};

export default useAuth;
