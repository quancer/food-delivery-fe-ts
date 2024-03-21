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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Stack
      direction="row"
      justifyContent={"center"}
      alignItems="center"
      sx={{ py: "168px" }}
    >
      <Stack
        direction={"column"}
        spacing={10}
        padding="8unit"
        border={"2px solid red"}
        sx={{ padding: "32px" }}
      >
        <Stack alignItems={"center"}>
          <h2>Нэвтрэх</h2>
        </Stack>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
            width: "382px",
          }}
          noValidate
          autoComplete="on"
        >
          <FormGroup>
            <FormControl>
              <TextField
                fullWidth
                // label="Имэйл хаягаа оруулна уу"
                id="fullWidth"
                placeholder="Имэйл хаягаа оруулна уу"
              />
            </FormControl>
            <FormControl sx={{ mt: 3, width: "100%" }} variant="outlined">
              <InputLabel>Нууц үг</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Link href="#" underline="none">
              {"Нууг үг сэргээх"}
            </Link>
          </FormGroup>
        </Box>
        <Stack direction="column" spacing={6}>
          <Button
            variant="contained"
            sx={{ width: "384px", padding: "8px 16px" }}
          >
            Нэвтрэх
          </Button>
          <Button
            variant="contained"
            sx={{ width: "384px", padding: "8px 16px" }}
          >
            Эсвэл
          </Button>
          <Button
            variant="contained"
            sx={{ width: "384px", padding: "8px 16px" }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
