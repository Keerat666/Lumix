// Dependencies -> Material UI, React (Install here: https://mui.com/material-ui/getting-started/installation/)
// Description: Upload file component

/*
Props:
- progress : number, progress of the upload in percentage
*/

import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ProgressChecker({ progress }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        mt: 3,
        ml: 4,
        justifyContent: "center",
      }}
    >
      <CircularProgress variant="determinate" {...{ value: progress }} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
