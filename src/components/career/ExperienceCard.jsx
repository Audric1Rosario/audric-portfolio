import { useState } from "react";
import { Box, Button, Chip, Collapse, Paper, Stack, Typography } from "@mui/material";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import PlaceOutlined from "@mui/icons-material/PlaceOutlined";
import RoleProgression from "./RoleProgression";
import { fontMono } from "../../theme/theme";

const VISIBLE = 3;

function Achievement({ item }) {
  return (
    <Box component="li" sx={{ display: "flex", gap: 1.5 }}>
      <Box
        aria-hidden
        sx={{ mt: "10px", width: 6, height: 6, borderRadius: "2px", bgcolor: "primary.main", flexShrink: 0 }}
      />
      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
        <Box component="strong" sx={{ color: "text.primary", fontWeight: 650 }}>
          {item.title}.
        </Box>{" "}
        {item.text}
      </Typography>
    </Box>
  );
}

export default function ExperienceCard({ job }) {
  const [expanded, setExpanded] = useState(false);
  const multiRole = job.roles.length > 1;
  const head = job.achievements.slice(0, VISIBLE);
  const rest = job.achievements.slice(VISIBLE);

  return (
    <Paper sx={{ p: { xs: 2.5, md: 3.5 }, bgcolor: "var(--ar-card)" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: 1 }}>
        <Typography variant="h5" component="h3">
          {job.company}
        </Typography>
        <Typography sx={{ fontFamily: fontMono, fontSize: 13, color: job.current ? "primary.main" : "text.secondary" }}>
          {job.dates}
        </Typography>
      </Box>
      {!multiRole && <Typography sx={{ fontWeight: 600, mt: 0.5 }}>{job.roles[0].title}</Typography>}
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
        {job.context}
      </Typography>
      <Box
        sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: "text.secondary", mt: 0.75, fontSize: 13 }}
      >
        <PlaceOutlined sx={{ fontSize: 16 }} aria-hidden />
        {job.location}
      </Box>

      {multiRole && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="overline" component="h4" sx={{ color: "text.secondary" }}>
            Role progression
          </Typography>
          <Box sx={{ mt: 1 }}>
            <RoleProgression roles={job.roles} />
          </Box>
        </Box>
      )}

      <Typography variant="overline" component="h4" sx={{ color: "text.secondary", display: "block", mt: 3 }}>
        Key achievements
      </Typography>
      <Stack component="ul" spacing={1.5} sx={{ listStyle: "none", p: 0, m: 0, mt: 1 }}>
        {head.map((a) => (
          <Achievement key={a.title} item={a} />
        ))}
      </Stack>
      {rest.length > 0 && (
        <>
          <Collapse in={expanded}>
            <Stack component="ul" spacing={1.5} sx={{ listStyle: "none", p: 0, m: 0, mt: 1.5 }}>
              {rest.map((a) => (
                <Achievement key={a.title} item={a} />
              ))}
            </Stack>
          </Collapse>
          <Button
            size="small"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            endIcon={
              <ExpandMoreRounded
                sx={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform .2s" }}
              />
            }
            sx={{ mt: 1.5, ml: -1 }}
          >
            {expanded ? "Show less" : `Show ${rest.length} more`}
          </Button>
        </>
      )}

      <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 0.75, mt: 2.5 }}>
        {job.tags.map((t) => (
          <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderColor: "divider" }} />
        ))}
      </Stack>
    </Paper>
  );
}
