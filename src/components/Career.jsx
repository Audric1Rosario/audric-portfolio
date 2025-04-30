import { careerHistory } from "../data/portfolioData";
import {
  Box,
  Typography,
  List,
  ListItem,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

export default function Career() {
  return (
    <Box id="career">
      <Typography variant="h4" gutterBottom>
        Career History
        <Timeline position="right">
          {careerHistory.map((job) => (
            <TimelineItem key={job.id}>
              <TimelineOppositeContent
                sx={{ flex: 0.2, m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >{`${job.startDate.getFullYear()} - ${
                job.endDate !== null ? job.endDate.getFullYear() : "Present"
              }`}</TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkOutlineOutlinedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ flex: 0.8 }}>
                <Card>
                  <CardHeader title={job.position} subheader={job.company} />
                  <CardContent sx={{ p: 0 }}>
                    <List>
                      {job.achievements.map((feat, i) => (
                        <ListItem key={i}>{feat}</ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Typography>
    </Box>
  );
}
