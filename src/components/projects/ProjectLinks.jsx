import { Button, Stack } from "@mui/material";
import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";
import GitHub from "@mui/icons-material/GitHub";

export default function ProjectLinks({ links = {}, title, size = "small" }) {
  if (!links.video && !links.repo) return null;
  return (
    <Stack direction="row" spacing={1}>
      {links.video && (
        <Button
          size={size}
          variant="outlined"
          startIcon={<PlayCircleOutline />}
          href={links.video}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch the ${title} demo video`}
        >
          Watch demo
        </Button>
      )}
      {links.repo && (
        <Button
          size={size}
          variant="outlined"
          startIcon={<GitHub />}
          href={links.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View the ${title} source code on GitHub`}
        >
          View code
        </Button>
      )}
    </Stack>
  );
}
