import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { useContext } from "react";
import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const StyledScrollMenu = styled(ScrollMenu)(({}) => ({}));

const StyledArrow = styled("div")(({ right = false }) => ({
  cursor: "pointer",
  background: "transparent",
  outline: "none",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#0c4fdf",
  borderRadius: "4px",
  border: "2px solid #0c4fdf",
  position: "absolute",
  bottom: "-20px",
  transform: "scale(1, 1)",
  transition: "0.3s all ease-in-out",
  right: right ? "80px" : "30px",
  "&:hover": {
    transform: "scale(1.1, 1.1)",
  },
  padding: 3,
}));

const LeftArrow = () => {
  const { scrollPrev, useIsVisible } = useContext(VisibilityContext);
  const isFirstItemVisible = useIsVisible("first", true);
  return !isFirstItemVisible ? (
    <StyledArrow
      right
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
    >
      <CaretLeft size={24} />
    </StyledArrow>
  ) : null;
};

const RightArrow = () => {
  const { scrollNext, useIsVisible } = useContext(VisibilityContext);
  const isLastItemVisible = useIsVisible("last", false);
  return !isLastItemVisible ? (
    <StyledArrow
      disabled={isLastItemVisible}
      onClick={() => {
        scrollNext();
      }}
    >
      <CaretRight size={24} />
    </StyledArrow>
  ) : null;
};

export default function HorizontalScrollbar({
  children,
  topic = "Topic Name",
}) {
  return (
    <Stack maxWidth={"90%"} marginBottom={3} marginTop={3}>
      <Typography color={"#000"} variant="h4" textAlign={"start"}>
        {topic}
      </Typography>
      <Stack
        position={"relative"}
        key={"scrollbar-container"}
        maxWidth={"100%"}
        alignSelf={"center"}
      >
        <StyledScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {children}
        </StyledScrollMenu>
      </Stack>
    </Stack>
  );
}
