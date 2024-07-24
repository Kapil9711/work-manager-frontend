import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ priority, setPriority }) {
  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          className="bg-white  "
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={priority}
          onChange={handleChange}
          sx={{
            "& .MuiSelect-select": {
              borderColor: "#762311",
              borderWidth: "2px 4px",
              borderStyle: "solid",

              fontWeight: "bold",
              "&:hover": {
                borderColor: "#762311",
                borderWidth: "2px 4px",
                borderStyle: "solid",
              },
              "&.Mui-focused": {
                borderColor: "#762311",
                borderWidth: "2px 4px",

                borderStyle: "solid",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value={"Low"}>Low</MenuItem>
          <MenuItem value={"Moderate"}>Moderate</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
