import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Reducer/index';
import { LoginView } from '../LoginView/LoginView';

type IsLoginProps = {
	children: React.ReactNode;
}


export default function IsLogin({children}:IsLoginProps) {
  const SignUser = useSelector((state:RootState) => state.SignUser);

  if(SignUser.curSignIn==false) {
    return(
      <LoginView open={false} onClose={()=>{}}/>
    );
  }

  return (children);
}