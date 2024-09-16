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
      gridTemplateColumns={{
        xs: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gap={2}
      padding={2}
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
