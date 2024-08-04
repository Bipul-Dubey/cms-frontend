import { customLoader } from "@/utils/common";
import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function LatestNews() {
  return (
    <Box>
      <Card
        style={{
          margin: 7,
          height: "fit-content",
          width: "fit-content",
          padding: 7,
          backgroundColor: "#6abaf8",
        }}
      >
        <Card
          style={{
            padding: 7,
            minWidth: 280,
            minHeight: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            loader={customLoader}
            height={250}
            width={250}
            src={
              "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <Stack justifyContent={"flex-start"} width={"100%"} paddingLeft={1}>
            <Typography variant="h6" fontWeight="bold" color="#000">
              {"Topics Name"}
            </Typography>
            <Typography variant="h6" color="#000">
              {"Topics Name"}
            </Typography>
            <Typography
              variant="subtitle1"
              color="#463af0"
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              {"Topics Name"}
            </Typography>
          </Stack>
        </Card>
      </Card>
    </Box>
  );
}

export default LatestNews;
