import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import { profile } from "../../data/profile";

export default function Contact() {
  return (
    <Box component="section" id="contact" aria-labelledby="contact-title">
      <Paper
        sx={{
          position: "relative",
          overflow: "hidden",
          p: { xs: 3, md: 6 },
          textAlign: "center",
          bgcolor: "var(--ar-card)",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "radial-gradient(40rem 16rem at 50% 0%, var(--ar-glow-1), transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography variant="overline" component="p" sx={{ color: "primary.main" }}>
            06 / Contact
          </Typography>
          <Typography id="contact-title" variant="h3" component="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}>
            Let&apos;s connect
          </Typography>
          <Typography sx={{ color: "text.secondary", mt: 1.5, maxWidth: 560, mx: "auto", fontSize: "1.05rem" }}>
            Data platforms, cloud architecture or applied AI: I&apos;m always happy to talk about systems that turn data
            into decisions.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ mt: 4, justifyContent: "center", alignItems: "center" }}
          >
            <Button variant="contained" size="large" startIcon={<EmailOutlined />} href={profile.links.email}>
              Email me
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<LinkedIn />}
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHub />}
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
