import { Box, Card, Typography } from "@mui/material";
import React from "react";

function BlogCategoryCard({}) {
  return (
    <Box marginBottom={1}>
      <Card
        style={{
          marginRight: 7,
          padding: 7,
          minWidth: 100,
          width: 200,
          maxWidth: 250,
          minHeight: 80,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography color={"#108bf0"} fontWeight={"bold"} variant="h5">
          Topic
        </Typography>
        <Typography textAlign={"center"}>descriptions text areas</Typography>
      </Card>
    </Box>
  );
}

export default BlogCategoryCard;
