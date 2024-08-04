import { Card, Divider, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";

function DescriptionCard({
  title = "",
  description = "",
  highlight = false,
  width = "40%",
  height = "",
  minWidth = "300px",
  small = false,
}) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        minWidth: minWidth,
        width: width,
        padding: 3,
        height: height,
        backgroundColor: highlight ? theme.primary.lighter : "",
        color: highlight ? theme.common.white : "",
      }}
    >
      <Typography
        variant="h4"
        fontSize={small ? "1rem" : "1.25rem"}
        fontWeight={600}
      >
        {title}
      </Typography>
      <Divider
        style={{
          width: "100%",
          borderBottomWidth: 3,
        }}
      />
      <Typography fontSize={"1rem"}>{description}</Typography>
    </Card>
  );
}

export default DescriptionCard;
