import { Grid, Loader } from "@mantine/core";
import * as React from "react";

export const PageSpinner: React.FC = () => {
  return (
    <Grid
      id="PageSpinner"
      aria-busy={true}
      sx={{ minHeight: "100vh", p: 10 }}
      justify="center"
      align="center"

    >
      <Loader aria-label="Loading Page" />
    </Grid>
  );
};
