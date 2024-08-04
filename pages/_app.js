import "@/styles/globals.css";
import theme from "@/themeEngine";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme.light}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
