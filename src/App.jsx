import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme, { MODE_STORAGE_KEY } from "./theme/theme";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Expertise from "./components/expertise/Expertise";
import CareerTimeline from "./components/career/CareerTimeline";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

export default function App() {
  return (
    <ThemeProvider theme={theme} defaultMode="dark" modeStorageKey={MODE_STORAGE_KEY} disableTransitionOnChange>
      <CssBaseline />
      <NavBar />
      <Box component="main">
        <Hero />
        <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", gap: { xs: 10, md: 14 }, pb: 10 }}>
          <About />
          <Expertise />
          <CareerTimeline />
          <Education />
          <Projects />
          <Contact />
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
