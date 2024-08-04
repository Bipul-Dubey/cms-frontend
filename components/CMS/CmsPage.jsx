import { Box } from "@mui/material";
import CmsNavbar from "../Navigation/CMSNavbar";
import Footer from "../Navigation/footer";

function CmsPage({ children }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        backgroundColor: "#f7f3f3",
      }}
    >
      <CmsNavbar />
      {children}
      <Footer />
    </Box>
  );
}

export default CmsPage;
