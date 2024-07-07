import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./foot.css";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";

const logoStyle = {
  width: "80px",
  height: "auto",
  "margin-left": "10px",
  "margin-bottom": "10px",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="/" style={{ textDecoration: "none" }}>
        Elite Resume &nbsp;
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container>
      <div className="foot">
        <Typography display="flex" sx={{ mx: 0.5, opacity: 0.5 }}>
          &nbsp;•&nbsp;
        </Typography>

        <Copyright />
      </div>
      <Stack
        direction="row"
        justifyContent="left"
        spacing={1}
        useFlexGap
        sx={{
          color: "text.secondary",
        }}
      ></Stack>
    </Container>
  );
}
