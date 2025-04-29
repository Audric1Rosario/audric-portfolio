import { Box, Container, useTheme } from "@mui/material";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import About from "../components/About";
import Career from "../components/Career";
import Projects from "../components/Projects";
import Thanks from "../components/Thanks";
export default function Main() {
  const theme = useTheme();
  return (
    <>
      <Hero
        message="Welcome to our website!"
        backgroundColor="#e0f2f7"
        textColor="#1976d2"
      />
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1600px", // máximo 1600px incluso en 4K
          width: "100%",
          px: { xs: 2, md: 6 }, // padding lateral para no pegarse
          mt: theme.spacing(8),
        }}
      >
        <Box display="flex" flexDirection="column" gap={theme.spacing(8)}>
          <About />
          <Expertise />
          <Career />
          <Projects />
          {/* <Contact /> */}
          <Thanks />
        </Box>
      </Container>
    </>
  );
}
