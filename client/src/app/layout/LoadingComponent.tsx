import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import { IMessage } from "../interface/message";

const LoadingComponent = ({ message = "Loading..." }: IMessage) => {
  return (
    <Backdrop open={true} invisible={true}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress size={100} color="info" />
        <Typography
          variant="h4"
          sx={{ justifyContent: "center", position: "fixed", top: "60%" }}
        >
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default LoadingComponent;
