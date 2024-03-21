import { CardMedia, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import BgImage from "../svg/BgImage";
import { relative } from "path";

const Showcase = () => {
  return (
    <Box bgcolor={"#18BA51"} height={"788px"}>
      <Box position={"absolute"} top={0} left={0} right={0} bottom={0}>
        <BgImage />
      </Box>
      <Stack
        direction={"row"}
        maxWidth={"1200px"}
        m="auto"
        position={"relative"}
        height={"788px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        // px={"120px"}
      >
        <Stack direction={"row"} alignItems={"center"} flexWrap={"nowrap"}>
          <Stack width={"400px"} color={"#fff"}>
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontSize: "55px",
                  fontWeight: "600",
                  lineHeight: "90%",
                  letterSpacing: "0.55px",
                }}
              >
                {"Pinecone Food delivery"}
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
              <Typography>
                {"Horem ipsum dolor sit amet, consectetur adipiscing elit."}
              </Typography>
            </Box>
          </Stack>
        </Stack>
        {/* width: 443px;
        height: 438px; */}
        <Box width={"590px"} height={"430px"} position={"relative"}>
          <Box position={"absolute"} top={0} left={0}>
            <CardMedia
              sx={{ height: "438px", width: "443px" }}
              image={
                "https://s3-alpha-sig.figma.com/img/0735/ebea/ea841e6608a7206e8f3e2cbcdcb911cf?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mr9SmflHslcKQjY3Sg9~9gi-e9uK~mwLj58F-MRhqWO5ymwhKfbkhZLFSi2m-NUtRnfKc8O8S-LaY8TDCBYm45pIwXHaLIAkIjtsHpWkPqaXhVtqGqiTjH1WBMJ2Nnk0UEOqeqb0Iz0b4GEzUoog7fiWtxTYmct57QIm8MZhUvz7RYQqwR06IaixbsfHX3XMRYqbU2~8ShP8u2LstVboWgOqjNryoqgCWyjRGJzDeK5Nw7in5qTgnB1rnUs-CPB3Ddz0-czoOd6Tyi0D7MfqUGmDuOZco4D-xXlpP0QrA7s~EbbACVkdr8-4hh6QS0Ky~lp4zicdqcYJcgdww~xMhw__"
              }
            />
          </Box>
          <Box position={"absolute"} bottom={0} right={0}>
            <CardMedia
              sx={{ height: "270px", width: "270px" }}
              image={
                "https://s3-alpha-sig.figma.com/img/7e09/e5d0/2949632a6a2df2f49b384d2050707197?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L4OKLufZsgDZFwT6sfMq5Vg6bvDfZJ9WxJph~mfFjqLHW1p0uUzKdBGrdd9ibTXqmawesXVRR0zu-ebp4Hz~Q1HJLkqPXVWa~5IDpH8~Nlcg7fXNWZERmWfdR33yJ-2hbRiie9K6gieHarHZLg2g9ZZRU3H4VoS-0r7y4Tv88fei2Mof-C1rVftb7qw6UaxDeSsxNO7F4x57LD3Yqaf1I7OfJnmgvUCIV4016tQImkkT88KurTeSFG9OpvaG-Pr0xmbEQ~OUKWBGqO7ZBTpjh~gxULysg~ScUwCMuUbf49jht6wnrG3AZqNnxvJFpUHCoGM~~wUF6tSPQNPjt3PhIQ__"
              }
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
export default Showcase;
