import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import ProjectLinks from "./ProjectLinks";
import { fontMono } from "../../theme/theme";

export default function PublicProjectCard({ project }) {
  return (
    <Paper
      component="article"
      aria-labelledby={`${project.id}-title`}
      sx={{
        overflow: "hidden",
        bgcolor: "var(--ar-card)",
        display: "flex",
        flexDirection: "column",
        transition: "border-color .2s ease",
        "&:hover": { borderColor: "primary.main" },
        "&:hover img": { transform: "scale(1.03)" },
      }}
    >
      <Box
        sx={{
          aspectRatio: "1000 / 659",
          overflow: "hidden",
          bgcolor: "var(--ar-media-bg)",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Box
          component="img"
          src={project.cover}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          width={1000}
          height={659}
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .4s ease" }}
        />
      </Box>
      <Box sx={{ p: 3, display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography sx={{ fontFamily: fontMono, fontSize: 12.5, color: "primary.main" }}>
          {project.category} | {project.year}
        </Typography>
        <Typography id={`${project.id}-title`} variant="h6" component="h3" sx={{ mt: 1, lineHeight: 1.3 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1, lineHeight: 1.65 }}>
          {project.summary}
        </Typography>
        <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 0.75, mt: 2, mb: 2.5 }}>
          {project.tags.map((t) => (
            <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderColor: "divider" }} />
          ))}
        </Stack>
        <Box sx={{ mt: "auto" }}>
          <ProjectLinks links={project.links} title={project.title} />
        </Box>
      </Box>
    </Paper>
  );
}
