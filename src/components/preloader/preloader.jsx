import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Preloader() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
