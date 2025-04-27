import { Container, useTheme } from "@mui/material";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
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
        <Contact />
      </Container>
    </>
  );
}
