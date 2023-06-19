import { Flex, Loader } from "@mantine/core";
import * as React from "react";

export const PageSpinner: React.FC = () => {
  return (
    <Flex
      id="PageSpinner"
      aria-busy={true}
      sx={{ minHeight: "100%", p: 10 }}
      justify="center"
      align="center"
    >
      <Loader aria-label="Loading Page" />
    </Flex>
  );
};
