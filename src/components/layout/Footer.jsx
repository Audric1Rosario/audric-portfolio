import { Box, Container, Typography } from "@mui/material";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", py: 4 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary", textAlign: { xs: "center", sm: "left" } }}>
          © {new Date().getFullYear()} Audric Rosario. Designed & built with React, Vite and MUI.
        </Typography>
        <SocialLinks size="small" />
      </Container>
    </Box>
  );
}
