// src/componetns/Footer.tsx

import React, { ReactElement } from "react";
import { AppBar, Container } from "@mui/material";
import Copyright from "./Copyright";

export const Footer: React.FC = (): ReactElement => {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
      <Container>
          <Copyright />
      </Container>
    </AppBar>
  );
};

export default Footer;