import { Box, Card, Typography } from "@mui/material";
import { Info } from "@phosphor-icons/react";
import React from "react";

export default function TeamMemberIntro({ member = {} }) {
  const { pictureUrl, name, jobRole, profileUrl } = member;

  const handleImageClick = () => {
    window.open(profileUrl, "_blank", "noopener,noreferrer"); // Open in a new tab
  };

  return (
    <Card
      style={{
        padding: "5px",
        minWidth: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={pictureUrl}
        alt=""
        srcset=""
        style={{
          width: "100%",
          height: "80%",
          borderRadius: 4,
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="body1" fontSize={"1.1rem"} fontWeight={600}>
            {name}
          </Typography>
          <Info
            size={20}
            onClick={handleImageClick}
            color="#2161da"
            style={{ cursor: "pointer" }}
          />
        </Box>
        <Typography variant="body1">{jobRole}</Typography>
      </Box>
    </Card>
  );
}
