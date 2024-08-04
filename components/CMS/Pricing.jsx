import { PRICING } from "@/constants/dummyData";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";

function Pricing({}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "25px 0px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        color={theme.primary.lighter}
        textAlign={"center"}
      >
        Pricing
      </Typography>
      <Box
        sx={{
          display: "flex",
          padding: "0px 10px",
          gap: 1,
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {PRICING?.map((plan) => (
          <Card
            style={{
              padding: "25px 10px",
              minHeight: "350px",
              width: "300px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontSize={"1.8rem"} fontWeight={600}>
              {plan?.planType}
            </Typography>
            <Typography variant="h6" fontSize={"1rem"}>
              {plan?.price}
            </Typography>
            <Divider sx={{ width: "100%" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                marginBottom: 3,
              }}
            >
              {plan.features?.map((feat) => (
                <Typography variant="h6" fontSize={"1rem"}>
                  {feat}
                </Typography>
              ))}
            </Box>
            <Button
              variant="contained"
              sx={{
                marginTop: "auto",
                width: "fit-content",
              }}
            >
              Choose Plan
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Pricing;
