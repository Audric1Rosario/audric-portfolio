import { Box, Paper, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function About() {
  return (
    <Box display="flex" flexDirection="column" gap={3} id="about">
      <Typography variant="h4" gutterBottom>
        About me
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        gap={1}
      >
        <FormatQuoteIcon
          color="white"
          sx={{ fontSize: 30, mt: -1, ml: 0, pl: 0 }}
        />
        <Paper sx={{ width: "75%", p: 1 }}>
          <Typography
            variant="body1"
            component="blockquote"
            sx={{ fontStyle: "italic" }}
          >
            I'm a Systems and Computer Engineer with over 3 years of experience,
            <br />
            <br />I currently work as a Full Stack Web Developer and I'm
            transitioning into the field of Data Science, Big Data and AI. I’m
            passionate about transforming data into meaningful solutions and
            building scalable systems. Whether it’s analyzing complex datasets,
            designing architectures, or fine-tuning performance, I enjoy
            tackling challenges.
            <br />
            <br /> On my free time, I solve problems on platforms like LeetCode
            and HackerRank to keep my skills sharp and constantly improve.
            <br />
            <br />I enjoy working in collaborative environments with diverse
            teams and I'm always eager to learn, grow and contribute.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
