import { Box } from "@mui/material";
import Section from "../layout/Section";
import ExperienceCard from "./ExperienceCard";
import { career } from "../../data/career";

export default function CareerTimeline() {
  return (
    <Section
      id="career"
      index="03"
      eyebrow="Career"
      title="Career history"
      intro="From telecom microservices to production data platforms and solution architecture for U.S. companies."
    >
      <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0, position: "relative" }}>
        {career.map((job, i) => (
          <Box
            component="li"
            key={job.id}
            sx={{ position: "relative", pl: { xs: 3.5, md: 6 }, pb: i === career.length - 1 ? 0 : 4 }}
          >
            {/* timeline rail */}
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                left: { xs: 7, md: 15 },
                top: 0,
                bottom: 0,
                width: 2,
                background:
                  i === 0
                    ? "linear-gradient(to bottom, var(--mui-palette-primary-main), var(--mui-palette-divider) 40%)"
                    : "var(--mui-palette-divider)",
              }}
            />
            {/* node */}
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                left: { xs: 0, md: 8 },
                top: 30,
                width: 16,
                height: 16,
                borderRadius: "50%",
                bgcolor: job.current ? "primary.main" : "background.paper",
                border: 3,
                borderColor: job.current ? "background.default" : "text.disabled",
                boxShadow: job.current ? "0 0 0 4px rgba(122,162,247,0.25)" : "none",
              }}
            />
            <ExperienceCard job={job} />
          </Box>
        ))}
      </Box>
    </Section>
  );
}
