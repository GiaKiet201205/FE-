import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#005baa" },
    secondary: { main: "#e31e24" },
    background: { default: "#f6f8fb" },
  },
  typography: {
    fontFamily: '"Segoe UI", Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-1.5px" },
    h2: { fontWeight: 800, letterSpacing: "-1.5px" },
    h3: { fontWeight: 800, letterSpacing: "-1px" },
    h4: { fontWeight: 800, letterSpacing: "-0.5px" },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: { borderRadius: 12 },
});

export default theme;
