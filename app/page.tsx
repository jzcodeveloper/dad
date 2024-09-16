import { Box, Typography } from "@mui/material";

import { Gallery } from "./components/gallery";

export default function Home() {
  return (
    <Box bgcolor="#000000" color="white">
      <Typography variant="h3" textAlign="center">
        ¡Siempre te recordaremos!
      </Typography>
      <Gallery />
      <Typography variant="h3" textAlign="center">
        ¡Te amamos!
      </Typography>
    </Box>
  );
}
