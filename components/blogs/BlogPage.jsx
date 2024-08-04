import BlogNavbar from "@/components/Navigation/BlogNavbar";
import { Box } from "@mui/material";
import Footer from "../Navigation/footer";

function BlogPages({ children }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{
        backgroundColor: "#f7f3f3",
      }}
    >
      <BlogNavbar />
      {children}
      <Footer />
    </Box>
  );
}

export default BlogPages;
