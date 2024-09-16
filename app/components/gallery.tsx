import path from "path";
import { readdir } from "fs/promises";

import { Box } from "@mui/material";
import { shuffle } from "./utils";

export const Gallery = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/images");
  const imageFilenames = await readdir(imageDirectory);

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gap={2}
      padding={3}
    >
      {shuffle(imageFilenames).map((image: string) => (
        <Box key={image}>
          <img
            src={`/images/${image}`}
            alt={`${image}`}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>
      ))}
    </Box>
  );
};
