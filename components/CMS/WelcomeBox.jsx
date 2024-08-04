import { Box, Button, Typography } from "@mui/material";
import React from "react";

function WelcomeBox({}) {
  return (
    <Box
      sx={{
        minHeight: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        minWidth: "100%",
        padding: "20px 5px",
      }}
    >
      <Typography variant="h2" color="#2b5491">
        Welcome to our CMS Platform
      </Typography>
      <Typography variant="h6" color="#000">
        Effortlessly create, manage, and scale your content with our
        user-friendly CMS.
      </Typography>
      <Button variant="contained" sx={{ borderRadius: 17, marginTop: 3 }}>
        Get Started
      </Button>
    </Box>
  );
}

export default WelcomeBox;
