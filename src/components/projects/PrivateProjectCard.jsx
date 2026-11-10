import { useState } from "react";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import ConfidentialBadge from "./ConfidentialBadge";
import GalleryTabs from "./GalleryTabs";
import GalleryCarousel from "./GalleryCarousel";
import { fontMono } from "../../theme/theme";

/** Enterprise / private project: case-study text + sanitized screenshot galleries. */
export default function PrivateProjectCard({ project, onOpenLightbox }) {
  const [galleryId, setGalleryId] = useState(project.galleries[0].id);
  const [indexes, setIndexes] = useState({});
  const gallery = project.galleries.find((g) => g.id === galleryId);
  const index = indexes[galleryId] ?? 0;
  const setIndex = (i) => setIndexes((prev) => ({ ...prev, [galleryId]: i }));

  const open = (i) =>
    onOpenLightbox({
      title: project.galleries.length > 1 ? `${project.title}: ${gallery.label}` : project.title,
      images: gallery.images,
      index: i,
      onSettle: setIndex,
    });

  return (
    <Paper
      component="article"
      aria-labelledby={`${project.id}-title`}
      sx={{ p: { xs: 2, md: 3.5 }, bgcolor: "var(--ar-card)" }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.25fr) minmax(0, 1fr)" },
          gap: { xs: 3, md: 4.5 },
        }}
      >
        <Box sx={{ minWidth: 0 }}>
          {project.galleries.length > 1 && (
            <GalleryTabs
              galleries={project.galleries}
              value={galleryId}
              onChange={setGalleryId}
              idPrefix={project.id}
            />
          )}
          <Box id={`${project.id}-panel`} role="tabpanel" aria-labelledby={`${project.id}-tab-${galleryId}`}>
            <GalleryCarousel
              key={galleryId}
              images={gallery.images}
              index={index}
              onIndexChange={setIndex}
              onOpen={open}
              label={`${project.title}, ${gallery.label}`}
            />
          </Box>
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ fontFamily: fontMono, fontSize: 12.5, color: "primary.main" }}>
            {project.category} | {project.year}
          </Typography>
          <Typography id={`${project.id}-title`} variant="h5" component="h3" sx={{ mt: 1, lineHeight: 1.25 }}>
            {project.title}
          </Typography>
          {project.context && (
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.75 }}>
              {project.context}
            </Typography>
          )}
          <Box sx={{ mt: 2 }}>
            <ConfidentialBadge />
          </Box>
          <Typography sx={{ mt: 2, color: "text.secondary", lineHeight: 1.7 }}>{project.summary}</Typography>
          <Stack component="ul" spacing={1.25} sx={{ listStyle: "none", p: 0, m: 0, mt: 2 }}>
            {project.highlights.map((h) => (
              <Box component="li" key={h.slice(0, 32)} sx={{ display: "flex", gap: 1.5 }}>
                <Box
                  aria-hidden
                  sx={{ mt: "9px", width: 6, height: 6, borderRadius: "2px", bgcolor: "secondary.main", flexShrink: 0 }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.65 }}>
                  {h}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 0.75, mt: 2.5 }}>
            {project.tags.map((t) => (
              <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderColor: "divider" }} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
}
