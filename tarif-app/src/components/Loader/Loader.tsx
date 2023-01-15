import { Center, LoadingOverlay } from "@mantine/core";

export default function Loader(): JSX.Element{
  return(
    <Center>
      <LoadingOverlay
        visible={true}
        overlayBlur={2}
      />
    </Center>
  );
}