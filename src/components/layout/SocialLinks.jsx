import { IconButton, Stack, Tooltip } from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import { profile } from "../../data/profile";

const items = [
  { label: "GitHub", href: profile.links.github, Icon: GitHub, external: true },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedIn, external: true },
  { label: "Email", href: profile.links.email, Icon: EmailOutlined },
];

export default function SocialLinks({ size = "medium" }) {
  return (
    <Stack direction="row" spacing={1}>
      {items.map((item) => {
        const { label, href, Icon, external } = item;
        return (
          <Tooltip key={label} title={label}>
            <IconButton
              component="a"
              href={href}
              aria-label={label}
              size={size}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              sx={{
                border: 1,
                borderColor: "divider",
                borderRadius: 2.5,
                color: "text.secondary",
                "&:hover": { color: "primary.main", borderColor: "primary.main" },
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          </Tooltip>
        );
      })}
    </Stack>
  );
}
