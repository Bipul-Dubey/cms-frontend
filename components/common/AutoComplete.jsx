import { Autocomplete } from "@mui/material";
import Textfield from "./TextField";

export const AutoComplete = ({
  label,
  options = [],
  value,
  onChange = () => {},
  ...props
}) => {
  return (
    <Autocomplete
      {...props}
      options={options}
      value={value}
      onChange={onChange}
      fullWidth
      renderInput={(params) => (
        <Textfield {...params} label={label} fullWidth />
      )}
    />
  );
};
