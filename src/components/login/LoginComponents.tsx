import * as React from "react";
import {
  Stack,
  Typography,
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Link,
  IconButton,
  FormGroup,
  Input,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const login = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const res = await fetch("http://localhost:4000/api/login", {
      body: JSON.stringify(login),
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("userToken", data.token);
      console.log("success");
      router.push("/dashboard");
    }
  };
  return (
    <Stack>
      <Typography>Нэвтрэх</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" name="email" required />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" name="password" required type="password" />
        </FormControl>
        <Input type="submit" value={"Нэвтрэх"} />
      </form>
    </Stack>
  );
};

export default Login;
