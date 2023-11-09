import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";

export default function SimpleSnackbar({ open, handleClose }) {
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small">
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        severity="success"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          ~ Movie Saved To WatchList ~
        </Alert>
      </Snackbar>
    </div>
  );
}
