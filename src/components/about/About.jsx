import { Box, Paper, Stack, Typography } from "@mui/material";
import Section from "../layout/Section";
import { about, focusAreas, profile } from "../../data/profile";
import { fontMono } from "../../theme/theme";

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="About me">
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr" }, gap: { xs: 4, md: 6 } }}>
        <Stack spacing={2.5}>
          {about.map((p) => (
            <Typography
              key={p.slice(0, 24)}
              sx={{ fontSize: { xs: "1.02rem", md: "1.1rem" }, lineHeight: 1.75, color: "text.secondary" }}
            >
              {p}
            </Typography>
          ))}
          <Typography variant="body2" sx={{ color: "text.secondary", fontFamily: fontMono, pt: 1 }}>
            Languages: {profile.languages.join(", ")}
          </Typography>
        </Stack>

        <Paper sx={{ p: { xs: 2.5, md: 3 }, bgcolor: "var(--ar-card)", alignSelf: "start" }}>
          <Typography variant="overline" component="h3" sx={{ color: "text.secondary" }}>
            What I focus on
          </Typography>
          <Stack component="ul" spacing={2} sx={{ listStyle: "none", p: 0, m: 0, mt: 1.5 }}>
            {focusAreas.map((f) => (
              <Box component="li" key={f.title} sx={{ display: "flex", gap: 1.5 }}>
                <Box
                  aria-hidden
                  sx={{ mt: "9px", width: 6, height: 6, borderRadius: "2px", bgcolor: "primary.main", flexShrink: 0 }}
                />
                <Box>
                  <Typography sx={{ fontWeight: 650 }}>{f.title}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {f.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Section>
  );
}
