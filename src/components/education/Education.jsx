import { Box, Paper, Typography } from "@mui/material";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import WorkspacePremiumOutlined from "@mui/icons-material/WorkspacePremiumOutlined";
import Section from "../layout/Section";
import { education } from "../../data/education";
import { fontMono } from "../../theme/theme";

export default function Education() {
  return (
    <Section id="education" index="04" eyebrow="Education" title="Education">
      <Box sx={{ display: "grid", gap: 2.5, gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" } }}>
        {education.map((e) => (
          <Paper key={e.id} sx={{ p: 3, bgcolor: "var(--ar-card)", display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
              <SchoolOutlined sx={{ color: "primary.main" }} aria-hidden />
              <Typography sx={{ fontFamily: fontMono, fontSize: 12.5, color: "text.secondary" }}>{e.dates}</Typography>
            </Box>
            <Typography variant="h6" component="h3" sx={{ lineHeight: 1.3 }}>
              {e.degree}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {e.school}, {e.location}
            </Typography>
            <Box
              sx={{
                mt: "auto",
                pt: 1.5,
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                color: "success.main",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <WorkspacePremiumOutlined sx={{ fontSize: 18 }} aria-hidden />
              {e.badge}
            </Box>
          </Paper>
        ))}
      </Box>
    </Section>
  );
}
