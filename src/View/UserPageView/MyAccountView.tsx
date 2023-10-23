import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Reducer/index';

import {Box, TextField, Grid, Divider} from "@mui/material";


export default function MyAccountView() {

  const SignUser = useSelector((state:RootState) => state.SignUser);
  
  return (
    <Box>
      <TextField
        disabled
        id="id"
        label="ID"
        defaultValue={SignUser.ID}
        margin="normal"
      />

      <Divider/>
      <TextField
        disabled
        id="nickname"
        label="닉네임"
        defaultValue="람쥐"
        margin="normal"
      />

      <Divider/>
      <TextField
        disabled
        id="registDay"
        label="가입일"
        defaultValue="2023.10.22"
        margin="normal"
      />
    </Box>
  );
}