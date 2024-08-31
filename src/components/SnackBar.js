import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

export default function SnackBar({ open, message }) {
  const action = (
    <>
      <IconButton size="small" aria-label="close" color="inherit">
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Note archived"
        action={action}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: "100%", backgroundColor: "#f50057" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
