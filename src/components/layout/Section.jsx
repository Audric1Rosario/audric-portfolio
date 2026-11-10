import { Box, Typography } from "@mui/material";

/** Section wrapper: mono eyebrow ("01 / About") + title + optional intro. */
export default function Section({ id, index, eyebrow, title, intro, children }) {
  return (
    <Box component="section" id={id} aria-labelledby={`${id}-title`}>
      <Box sx={{ mb: { xs: 4, md: 6 }, maxWidth: 760 }}>
        <Typography variant="overline" component="p" sx={{ color: "primary.main", lineHeight: 2 }}>
          {index} / {eyebrow}
        </Typography>
        <Typography id={`${id}-title`} variant="h3" component="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}>
          {title}
        </Typography>
        {intro && (
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 1.5, fontSize: "1.05rem" }}>
            {intro}
          </Typography>
        )}
      </Box>
      {children}
    </Box>
  );
}
