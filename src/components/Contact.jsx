// import emailjs from '@emailjs/browser';
import React, { useRef, useState } from "react";
import { Box, Button, Typography, Grid, useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
//import "../assets/styles/Contact.css";

function Contact() {
  const theme = useTheme();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const [nameError, setNameError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [messageError, setMessageError] = useState("");
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="textSecondary">
        Want to build a project? Let's make it happen!
      </Typography>
      <Box
        component="form"
        autoComplete="off"
        className="contact-form"
        noValidate
        sx={{ marginTop: theme.spacing(2) }}
      >
        <Grid container spacing={theme.spacing(2)}>
          <Grid size={{ xs: 12, md: 6 }} justifyContent="space-between">
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              placeholder="What's your name?"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              required
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="How can I reach you?"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              required
              id="message"
              name="message"
              label="Message"
              placeholder="Send me any questions, inquiries or proposals"
              multiline
              rows={10}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12 }} justifyContent="right">
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" startIcon={<SendIcon />}>
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Contact;
/*
{isSubmitSuccessful && (
  <Grid item xs={12}>
    <Typography color="success.main" variant="body2">
      ✅ Message sent successfully!
    </Typography>
  </Grid>
)}
*/
