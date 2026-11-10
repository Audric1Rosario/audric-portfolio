import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PlaceOutlined from "@mui/icons-material/PlaceOutlined";
import profilePhoto from "../../assets/profile/audric-rosario.webp";
import { profile } from "../../data/profile";
import SocialLinks from "../layout/SocialLinks";
import { fontMono } from "../../theme/theme";

function Portrait() {
  return (
    <Box sx={{ position: "relative", width: { xs: 220, md: 280 }, mx: "auto" }}>
      {/* gradient ring */}
      <Box
        sx={{
          p: "3px",
          borderRadius: "28px",
          background: "var(--ar-ring)",
          boxShadow: "0 30px 80px -30px rgba(122, 162, 247, 0.45)",
        }}
      >
        <Box
          component="img"
          src={profilePhoto}
          alt="Audric Rosario, portrait"
          width={364}
          height={364}
          fetchPriority="high"
          decoding="async"
          sx={{
            display: "block",
            width: "100%",
            height: "auto",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            borderRadius: "25px",
          }}
        />
      </Box>
      {/* status card */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: "50%", md: -36 },
          bottom: -22,
          transform: { xs: "translateX(-50%)", md: "none" },
          px: 1.75,
          py: 1,
          borderRadius: 2.5,
          border: 1,
          borderColor: "divider",
          bgcolor: "var(--ar-glass)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          gap: 1,
          whiteSpace: "nowrap",
          boxShadow: "0 12px 30px -12px rgba(0,0,0,0.35)",
        }}
      >
        <Box
          aria-hidden
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            bgcolor: "success.main",
            boxShadow: "0 0 0 4px rgba(158,206,106,0.18)",
          }}
        />
        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
          {profile.current.title}{" "}
          <Box component="span" sx={{ color: "text.secondary", fontWeight: 500 }}>
            at {profile.current.company}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default function Hero() {
  return (
    <Box component="section" id="top" aria-label="Introduction" sx={{ pt: { xs: 6, md: 12 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.35fr 1fr" },
            gap: { xs: 7, md: 8 },
            alignItems: "center",
          }}
        >
          <Box sx={{ order: { xs: 2, md: 1 }, textAlign: { xs: "center", md: "left" } }}>
            <Chip
              icon={<PlaceOutlined sx={{ fontSize: 16 }} />}
              label={profile.location}
              variant="outlined"
              sx={{ mb: 3, color: "text.secondary", borderColor: "divider" }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: "2.75rem", sm: "3.5rem", md: "4.25rem" } }}>
              {profile.name}
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                fontFamily: fontMono,
                fontWeight: 600,
                fontSize: { xs: "1rem", md: "1.2rem" },
                background: "var(--ar-ring)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              {profile.role}
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 2,
                color: "text.secondary",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                lineHeight: 1.55,
                maxWidth: 560,
                mx: { xs: "auto", md: 0 },
              }}
            >
              {profile.tagline}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ mt: 4, justifyContent: { xs: "center", md: "flex-start" }, alignItems: "center" }}
            >
              <Button variant="contained" size="large" href="#projects" endIcon={<ArrowForwardRounded />}>
                View projects
              </Button>
              <Button variant="outlined" size="large" href={profile.links.email} startIcon={<EmailOutlined />}>
                Get in touch
              </Button>
              <Box sx={{ pl: { sm: 1 } }}>
                <SocialLinks />
              </Box>
            </Stack>
          </Box>

          <Box sx={{ order: { xs: 1, md: 2 } }}>
            <Portrait />
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
