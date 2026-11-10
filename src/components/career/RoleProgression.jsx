import { useState } from "react";
import { Box, ButtonBase, Chip, Collapse, Typography } from "@mui/material";
import { fontMono } from "../../theme/theme";

/** Vertical stepper of chained roles (newest first). Selecting a role reveals its scope. */
export default function RoleProgression({ roles }) {
  const [selected, setSelected] = useState(0);

  return (
    <Box component="ol" aria-label="Role progression" sx={{ listStyle: "none", p: 0, m: 0, position: "relative" }}>
      {roles.map((role, i) => {
        const isOpen = selected === i;
        const isLast = i === roles.length - 1;
        return (
          <Box component="li" key={role.title} sx={{ position: "relative", pl: 4, pb: isLast ? 0 : 1 }}>
            {/* rail */}
            {!isLast && (
              <Box
                aria-hidden
                sx={{ position: "absolute", left: 9, top: 22, bottom: -2, width: 2, bgcolor: "divider" }}
              />
            )}
            {/* node */}
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                left: 3,
                top: 9,
                width: 14,
                height: 14,
                borderRadius: "50%",
                border: 2,
                borderColor: role.current ? "primary.main" : "text.disabled",
                bgcolor: isOpen ? "primary.main" : "background.paper",
                transition: "background-color .2s ease",
              }}
            />
            <ButtonBase
              onClick={() => setSelected(i)}
              aria-expanded={isOpen}
              aria-controls={`role-scope-${i}`}
              sx={{
                width: "100%",
                justifyContent: "flex-start",
                textAlign: "left",
                borderRadius: 2,
                px: 1.25,
                py: 0.75,
                ml: -1.25,
                bgcolor: isOpen ? "rgba(122, 162, 247, 0.10)" : "transparent",
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  columnGap: 1.5,
                  rowGap: 0.25,
                  width: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 650, color: isOpen ? "text.primary" : "text.secondary" }}>
                  {role.title}
                </Typography>
                <Typography sx={{ fontFamily: fontMono, fontSize: 12.5, color: "text.secondary" }}>
                  {role.dates}
                </Typography>
                {role.current && (
                  <Chip
                    label="Current"
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ height: 20, fontSize: 11 }}
                  />
                )}
              </Box>
            </ButtonBase>
            <Collapse in={isOpen} unmountOnExit={false}>
              <Typography
                id={`role-scope-${i}`}
                variant="body2"
                sx={{ color: "text.secondary", pt: 0.75, pb: 1.25, pr: 1, lineHeight: 1.65 }}
              >
                {role.scope}
              </Typography>
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
}
