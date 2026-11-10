import { Box, Tooltip } from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";

export default function ConfidentialBadge() {
  return (
    <Tooltip title="Source code and data belong to the client. Screenshots were sanitized: client identifiers relabeled, dates and personal data redacted.">
      <Box
        tabIndex={0}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.75,
          px: 1.25,
          py: 0.5,
          borderRadius: 2,
          border: 1,
          borderColor: "secondary.main",
          color: "secondary.main",
          fontSize: 12.5,
          fontWeight: 600,
          lineHeight: 1.4,
          bgcolor: "rgba(187, 154, 247, 0.08)",
          outline: "none",
          "&:focus-visible": { boxShadow: "0 0 0 3px rgba(187,154,247,0.35)" },
        }}
      >
        <LockOutlined sx={{ fontSize: 15 }} aria-hidden />
        Private Enterprise Architecture (Case Study Gallery)
      </Box>
    </Tooltip>
  );
}
