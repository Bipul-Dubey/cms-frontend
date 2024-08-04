import React from "react";
import { TextField } from "@mui/material";

// Common TextField component
export default function Textfield({
  fullWidth = true,
  size = "small",
  ...props
}) {
  return <TextField {...props} fullWidth={fullWidth} size={size} />;
}
