'use client';
import { useState } from 'react';
import { currentUser, signedIn } from '../store';
import { useRecoilState } from 'recoil';
import { User } from '../types/user';
import { userData } from '../data/user';

const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useRecoilState<boolean>(signedIn);
  const [error] = useState<string | null>();
  const [currentUserData, setCurrentUserData] = useRecoilState<User | undefined>(currentUser);

  const signIn = () => {
    console.log('Sign in');
    setIsSignedIn(true);
    setCurrentUserData(userData);
  };

  const signOut = () => {
    console.log('Sign out');
    setIsSignedIn(false);
    setCurrentUserData({} as User);
  };

  return { isSignedIn, currentUserData, error, signIn, signOut };
};

export default useAuth;
