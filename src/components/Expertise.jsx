import { languages, expertise } from "../data/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Chip, Grid, Stack, Typography, useTheme } from "@mui/material";
export default function Expertise() {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" gap={3} id="expertise">
      <Typography variant="h4" gutterBottom>
        Expertise
      </Typography>
      {/* <Typography variant="textSecondary">
        Want to build a project? Let's make it happen!
      </Typography> */}
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1}>
        {languages.map((skill, i) => (
          <Chip key={i} label={skill} variant="outlined" />
        ))}
      </Stack>
      <Grid container spacing={theme.spacing(8)} justifyContent="center">
        {expertise.map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 6, xl: 4 }}>
            <Box
              sx={{ textAlign: "left" }}
              display="flex"
              flexDirection="column"
              gap={theme.spacing(1)}
            >
              <Box sx={{ mb: 2 }}>
                <FontAwesomeIcon icon={item.icon} size="3x" />
              </Box>

              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {item.name}
              </Typography>

              <Typography variant="body1">{item.description}</Typography>

              {/* <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                Tech
              </Typography> */}
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {item.skillset.map((skill, i) => (
                  <Chip key={i} label={skill} variant="outlined" />
                ))}
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
