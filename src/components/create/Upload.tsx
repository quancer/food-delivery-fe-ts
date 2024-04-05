import { CircularProgress, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const CLOUD_NAME = "dgosa1eer";
const UPLOAD_PRESET = "ilguan7n";

interface imageUrlType {
  imageUrl: string | null;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
}

const UploadImg = ({ imageUrl, setImageUrl }: imageUrlType) => {
  const [file, setFile] = useState<File | null>(null);
  // const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files) {
      setFile(event.target.files[0]);
    }
  };
  useEffect(() => {
    // const handle = async () => {
    //   if (file) {
    //     setLoading(true);
    //     const data = new FormData();
    //     data.append("file", file);
    //     data.append("upload_preset", UPLOAD_PRESET);
    //     const res = await fetch(
    //       `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
    //       {
    //         method: "POST",
    //         body: data,
    //       }
    //     );
    //     console.log(res);
    //     const resJson = await res.json();
    //     console.log(resJson);
    //     if (resJson.url) {
    //       setImageUrl(resJson.url);
    //     }
    //     setLoading(false);
    //   }
    // };
    uploadHandler();
  }, [file]);

  const uploadHandler = async () => {
    if (file) {
      setLoading(true);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", UPLOAD_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      // console.log(res);
      const resJson = await res.json();
      // console.log(resJson);
      if (resJson.url) {
        setImageUrl(resJson.url);
      }
      setLoading(false);
    }
  };

  return (
    <Stack width={"200px"}>
      {loading && (
        <Stack
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Typography>Loading..</Typography>
          <CircularProgress />
        </Stack>
      )}
      <Stack direction={"row"}>
        <input type="file" onChange={fileChangeHandler} />
        {/* <button onClick={uploadHandler}>Upload shd</button> */}
      </Stack>
      <Box>{imageUrl && <img src={imageUrl} alt="uploaded" />}</Box>
    </Stack>
  );
};

export default UploadImg;
