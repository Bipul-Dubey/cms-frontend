import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#0b86ea",
        minHeight: 70,
        width: "100%",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography fontWeight={"bold"} variant="h6">
        © 2024 - CMS Platform
      </Typography>
    </Box>
  );
}

export default Footer;
