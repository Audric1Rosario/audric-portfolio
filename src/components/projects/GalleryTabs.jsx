import { Box, Tab, Tabs } from "@mui/material";

/** Switches between galleries of the same project (e.g. delivered V1 vs. cloud-native PoC). */
export default function GalleryTabs({ galleries, value, onChange, idPrefix }) {
  return (
    <Tabs
      value={value}
      onChange={(_, v) => onChange(v)}
      variant="fullWidth"
      aria-label="Screenshot galleries"
      sx={{
        mb: 1.5,
        minHeight: 0,
        p: 0.5,
        borderRadius: 2.5,
        border: 1,
        borderColor: "divider",
        bgcolor: "var(--ar-media-bg)",
        "& .MuiTabs-indicator": {
          height: "100%",
          borderRadius: 2,
          bgcolor: "var(--ar-card)",
          border: 1,
          borderColor: "primary.main",
          zIndex: 0,
        },
        "& .MuiTabs-flexContainer": { gap: 0.5 },
      }}
    >
      {galleries.map((g) => (
        <Tab
          key={g.id}
          value={g.id}
          id={`${idPrefix}-tab-${g.id}`}
          aria-controls={`${idPrefix}-panel`}
          aria-label={g.label}
          label={
            <Box component="span" sx={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
              <Box component="span" sx={{ fontWeight: 650, fontSize: 13.5 }}>
                {g.shortLabel}
              </Box>
              <Box component="span" sx={{ fontWeight: 500, fontSize: 11.5, opacity: 0.8 }}>
                {g.stack}
              </Box>
            </Box>
          }
          sx={{
            zIndex: 1,
            minHeight: 0,
            py: 1,
            px: 1,
            borderRadius: 2,
            color: "text.secondary",
            "&.Mui-selected": { color: "text.primary" },
          }}
        />
      ))}
    </Tabs>
  );
}
