import { Box, Typography } from "@mui/material";
import React from "react";

function WelcomeBox() {
  return (
    <Box
      sx={{
        backgroundColor: "#3285f0",
        minHeight: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        minWidth: "100%",
        padding: "20px 5px",
        color: "#fff",
      }}
    >
      <Typography variant="h2">Welcome to Blogs</Typography>
      <Typography variant="h6">
        Discover, Read and Share Blogs on Interesting Topics
      </Typography>
    </Box>
  );
}

export default WelcomeBox;
