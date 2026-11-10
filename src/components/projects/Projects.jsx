import { Box } from "@mui/material";
import Section from "../layout/Section";
import PublicProjectCard from "./PublicProjectCard";
import { projects } from "../../data/projects";

// Private case-study components (PrivateProjectCard, GalleryCarousel, GalleryTabs, Lightbox,
// ConfidentialBadge) live in this folder but are not rendered: recent enterprise work is confidential.
export default function Projects() {
  return (
    <Section
      id="projects"
      index="05"
      eyebrow="Projects"
      title="Personal & academic projects"
      intro="Personal and university projects, each with a short description, a demo video and/or the source code. My recent enterprise work is confidential, so it's covered in the Career section."
    >
      <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
        {projects.map((p) => (
          <PublicProjectCard key={p.id} project={p} />
        ))}
      </Box>
    </Section>
  );
}
