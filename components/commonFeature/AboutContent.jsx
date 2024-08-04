import { Box } from "@mui/material";
import React from "react";
import SectionHeading from "../CMS/SectionHeading";
import { ABOUT_CMS_TOOLs, TEAM_MEMBER } from "@/constants/dummyData";
import DescriptionCard from "../common/DescriptionCard";
import TeamMemberIntro from "../CMS/TeamMemberIntro";

export default function AboutContent({}) {
  return (
    <Box
      sx={{
        padding: "20px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >
      <SectionHeading
        title="About Us"
        description=" Discover who we are and what we do. Our CMS is designed to empower
        users to create and manage websites effortlessly."
      />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          maxWidth: "95%",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {ABOUT_CMS_TOOLs?.map((item, index) => {
          const row = Math.floor(index / 2); // Calculate row number
          const col = index % 2; // Calculate column number
          const highlight = (row + col) % 2 === 0;
          return (
            <DescriptionCard
              description={item.description}
              title={item.title}
              highlight={highlight}
            />
          );
        })}
      </Box>
      <SectionHeading
        title="Our Team"
        description="Discover the talented individuals behind our success, each bringing
        unique skills and a commitment to excellence to our team."
      />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          maxWidth: "95%",
          justifyContent: "center",
        }}
      >
        {TEAM_MEMBER?.map((item) => (
          <TeamMemberIntro member={item} />
        ))}
      </Box>
    </Box>
  );
}
