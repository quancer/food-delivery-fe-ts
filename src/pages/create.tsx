import CreateCategory from "@/components/create/CreateCategory";
import CreateFood from "@/components/create/CreateFood";
import { Container, Stack } from "@mui/system";

const Page = () => {
  return (
    <Stack>
      <Container>
        <Stack direction={"row"} spacing={4} p={4}>
          <CreateCategory />
          <CreateFood />
        </Stack>
      </Container>
    </Stack>
  );
};
export default Page;
