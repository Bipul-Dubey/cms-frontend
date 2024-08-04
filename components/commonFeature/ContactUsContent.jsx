import { SUPPORT_INFO } from "@/constants/dummyData";
import {
  Box,
  Button,
  Card,
  InputAdornment,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import DescriptionCard from "../common/DescriptionCard";
import Textfield from "../common/TextField";
import { Envelope, Phone, User } from "@phosphor-icons/react";

export default function ContactUsContent() {
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        gap: 2,
      }}
    >
      {/* 
    //#region Contact area text 
    */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: {
            xs: "100%",
            sm: "50%",
          },
          alignItems: "flex-start",
          justifyContent: "center",
          minWidth: "300px",
        }}
      >
        <Typography variant="h3" fontWeight={600}>
          Contact Us
        </Typography>
        <Typography maxWidth={"300px"}>
          Email, call, or complete the form to learn how we can solve your
          problem
        </Typography>
        <Typography>info@cmsplatform.in</Typography>
        <Typography>+91 123 1234 123</Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          {SUPPORT_INFO?.map((item) => (
            <DescriptionCard
              small
              title={item.title}
              description={item.description}
              height="fit-content"
              width="100%" // Full width on smaller screens
            />
          ))}
        </Box>
      </Box>
      {/* 
    //#region Contact area form 
    */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: {
            xs: "100%",
            sm: "50%",
          },
          height: "100%",
          padding: "25px",
          minWidth: "300px",
        }}
      >
        <Card sx={{ padding: "20px" }}>
          <Typography variant="h6" fontWeight={600}>
            Get in Touch
          </Typography>
          <Typography variant="body1" color={"grey"}>
            You can reach us anytime
          </Typography>
          <Box
            sx={{
              width: "100%",
              margin: "20px 0px",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Textfield
              label="Full Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <User />
                  </InputAdornment>
                ),
              }}
            />
            <Textfield
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Envelope />
                  </InputAdornment>
                ),
              }}
            />
            <Textfield
              label="Phone Number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />
            <TextareaAutosize
              minRows={4}
              maxRows={7}
              style={{
                width: "100%",
                height: "25px",
              }}
            />
            <Button variant="contained">Send Message</Button>
            <Typography textAlign={"center"}>
              By contacting us you agree to our{" "}
              <strong>Terms of service</strong> and{" "}
              <strong>Privacy policy.</strong>
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
