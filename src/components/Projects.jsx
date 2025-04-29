import { projects } from "../data/portfolioData";
import {
  Box,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";

// Icons
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

// Ordenar por proyecto mas actual
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

export default function Projects() {
  const theme = useTheme();
  //console.log(projects);
  return (
    <Box id="projects" display="flex" flexDirection="column">
      <Typography variant="h4" gutterBottom>
        Personal Projects
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 700, mb: 4 }}>
        The projects presented here highlight my capabilities and experience.
        For each, you'll find a brief description, a video demonstration and a
        link to the code.
      </Typography>

      <Grid container spacing={theme.spacing(8)} sx={{ height: "100%" }}>
        {projects.map((project) => (
          <Grid key={project.id} size={{ xs: 12, md: 6 }}>
            <Card
              elevation={1}
              sx={{
                transition: "transform 0.3s ease",
                "&:hover img": {
                  transform: "scale(1.2)",
                },
              }}
            >
              <CardHeader
                title={project.title}
                subheader={project.date.toLocaleDateString()}
              />

              <Box sx={{ overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: "cover", borderRadius: "5px" }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1 }}>
                {/* <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography> */}
                <Typography variant="body2" gutterBottom>
                  {project.description}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <Box sx={{ ml: "auto" }}>
                  {project.video != "" ? (
                    <IconButton
                      aria-label="watch video"
                      component="a"
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PlayCircleOutlinedIcon />
                    </IconButton>
                  ) : null}
                  {project.repo != "" ? (
                    <IconButton
                      aria-label="read code"
                      component="a"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeOutlinedIcon />
                    </IconButton>
                  ) : null}
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
