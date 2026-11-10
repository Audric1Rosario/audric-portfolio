import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import CloudOutlined from "@mui/icons-material/CloudOutlined";
import StorageOutlined from "@mui/icons-material/StorageOutlined";
import MonitorHeartOutlined from "@mui/icons-material/MonitorHeartOutlined";
import PsychologyOutlined from "@mui/icons-material/PsychologyOutlined";
import CodeOutlined from "@mui/icons-material/CodeOutlined";
import Section from "../layout/Section";
import { expertise } from "../../data/expertise";

const icons = {
  cloud: CloudOutlined,
  storage: StorageOutlined,
  monitoring: MonitorHeartOutlined,
  ai: PsychologyOutlined,
  code: CodeOutlined,
};

export default function Expertise() {
  return (
    <Section
      id="expertise"
      index="02"
      eyebrow="Expertise"
      title="Expertise & tech stack"
      intro="The tools and practices I use day to day, grouped into five areas."
    >
      <Box
        sx={{
          display: "grid",
          gap: 2.5,
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(6, 1fr)" },
          // 3 cards on the first row, 2 wider cards on the second (lg)
          "& > :nth-of-type(-n+3)": { gridColumn: { lg: "span 2" } },
          "& > :nth-of-type(n+4)": { gridColumn: { lg: "span 3" } },
        }}
      >
        {expertise.map((d) => {
          const Icon = icons[d.icon];
          return (
            <Paper
              key={d.id}
              sx={{
                p: 3,
                bgcolor: "var(--ar-card)",
                transition: "border-color .2s ease, transform .2s ease",
                "&:hover": { borderColor: "primary.main", transform: "translateY(-2px)" },
              }}
            >
              <Box
                aria-hidden
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2.5,
                  display: "grid",
                  placeItems: "center",
                  color: "primary.main",
                  border: 1,
                  borderColor: "divider",
                  mb: 2,
                }}
              >
                <Icon />
              </Box>
              <Typography variant="h6" component="h3" sx={{ lineHeight: 1.3 }}>
                {d.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.75, mb: 2 }}>
                {d.description}
              </Typography>
              <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 0.75 }}>
                {d.skills.map((s) => (
                  <Chip key={s} label={s} size="small" variant="outlined" sx={{ borderColor: "divider" }} />
                ))}
              </Stack>
            </Paper>
          );
        })}
      </Box>
    </Section>
  );
}
