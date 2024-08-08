import BlogPages from "@/components/blogs/BlogPage";
import WelcomeBox from "@/components/blogs/WelcomeBox";
import { AutoComplete } from "@/components/common/AutoComplete";
import Textfield from "@/components/common/TextField";
import { Box, Button } from "@mui/material";
import { TextEditor } from "../../components/common/TextEditors";

export default function Write({}) {
  return (
    <BlogPages>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <WelcomeBox
          heading="Write Blog"
          subheading="Share your idea's with others and grow all."
        />
        <Box
          sx={{
            padding: 2,
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" }, // Stack on small screens, row on larger
          }}
        >
          <AutoComplete label={"Category"} options={[]} width="100%" />
          <Textfield label="Topic Name" />
        </Box>
        <Box
          sx={{
            p: 2,
          }}
        >
          <TextEditor />
        </Box>
        <Box
          sx={{
            mb: 2,
            mr: 2,
            alignSelf: "flex-end",
          }}
        >
          <Button variant="contained">Submit Post</Button>
        </Box>
      </Box>
    </BlogPages>
  );
}
