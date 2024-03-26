import { Container, Stack } from "@mui/system";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/map/Map"), { ssr: false });
const Maps = () => {
  return (
    <Container>
      <Stack py={10}>
        <Map />
      </Stack>
    </Container>
  );
};

export default Maps;
