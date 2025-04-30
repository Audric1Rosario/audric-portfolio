import { Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NotFoundPage() {
  const navigator = useNavigate();
  const goHome = () => {
    navigator("/");
  };
  return (
    <Container maxWidth="md" sx={{ py: 15, textAlign: "center" }}>
      <ErrorOutlineIcon color="primary" sx={{ fontSize: 100, mb: 2 }} />
      <Typography variant="h2" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Oops! Looks like this page doesn't exist or has been moved
      </Typography>
      <Button variant="contained" color="primary" size="large" onClick={goHome}>
        Home
      </Button>
    </Container>
  );
}
