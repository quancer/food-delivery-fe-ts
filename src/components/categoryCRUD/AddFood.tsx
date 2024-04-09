import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const AddFood = () => {
  const [name, setName] = useState<string | undefined>();
  const [price, setPrice] = useState<string | undefined>();
  const [stock, setStock] = useState<string | undefined>();

  const addFoodHandler = async () => {
    const newFood = {
      name,
      price,
      stock,
    };
    console.log(newFood);

    const userToken = localStorage.getItem("userToken");

    const response = await fetch("http://localhost:4000/api/food", {
      body: JSON.stringify(newFood),
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography sx={{ mr: "20px" }}>Name: </Typography>
        <TextField
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography sx={{ mr: "20px" }}>Price: </Typography>
        <TextField
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography sx={{ mr: "20px" }}>Stock: </Typography>
        <TextField
          onChange={(e) => {
            setStock(e.target.value);
          }}
        />
      </Stack>
      <Button onClick={addFoodHandler}>Add Food</Button>
    </Card>
  );
};
