// src/componetns/Footer.tsx

import React, { ReactElement } from "react";
import { Box, Container, Grid } from "@mui/material";
import Copyright from "./Copyright";

export const Footer: React.FC = (): ReactElement => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Copyright />
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;