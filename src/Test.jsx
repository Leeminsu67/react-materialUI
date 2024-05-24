import { Box, Button, Stack, Typography } from "@mui/material";
import "./App.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import styled from "@emotion/styled/macro";
import { blue, green, red } from "@mui/material/colors";

const Test = () => {
  return (
    <div>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Stack>
      <br />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Box
          flex={1}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            display: { xs: "none", sm: "block" },
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={2}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={3}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Stack>
      <br />

      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Box
          flex={1}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={2}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={3}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Stack>

      <Button size="large">Hello World!</Button>
      <Button variant="text">text</Button>
      <Button
        startIcon={<AcUnitIcon />}
        fullWidth
        size="large"
        variant="contained"
      >
        Large Button
      </Button>
      <Button endIcon={<AccessibilityIcon />} variant="outlined">
        Hello World!
      </Button>
      <Button
        sx={{
          background: "gray",
          color: "white",
          margin: 10,
          "&:hover": { backgroundColor: "black" },
          "&:disabled": { backgroundColor: "white", color: "black" },
        }}
      >
        Custom Style
      </Button>

      <CustomButton>Custom Button style</CustomButton>

      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>

      <Button color="secondary">Theme Button</Button>

      <CustomThemeButton>Custom Theme Button</CustomThemeButton>

      <Root>
        <Typography>down(md):red</Typography>
        <Typography>up(md):blue</Typography>
        <Typography>up(lg):green</Typography>
      </Root>
    </div>
  );
};

export default Test;

const Root = styled(`div`)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
  },
}));

const CustomThemeButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: "white",
  margin: 10,
  "&:hover": { backgroundColor: "black" },
  "&:disabled": { backgroundColor: "white", color: "black" },
}));

const CustomButton = styled(Button)({
  background: "gray",
  color: "white",
  margin: 10,
  "&:hover": { backgroundColor: "black" },
  "&:disabled": { backgroundColor: "white", color: "black" },
});
