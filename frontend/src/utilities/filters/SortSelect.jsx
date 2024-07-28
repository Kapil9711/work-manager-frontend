import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SortSelect({ sortBy, setSortBy }) {
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: "120px", paddingBlock: "0px" }}>
      <FormControl sx={{ paddingBlock: "0px" }} fullWidth>
        <Select
          className="bg-white  "
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          onChange={handleChange}
          sx={{
            borderWidth: "2px",
            borderColor: "#b3aead",
            borderStyle: "solid",
            height: "40px",
            "& .MuiSelect-select": {
              borderColor: "#0f0301",

              borderStyle: "solid",

              fontWeight: "bold",
              "&:hover": {
                borderColor: "#762311",

                borderStyle: "solid",
              },
              "&.Mui-focused": {
                borderColor: "#762311",

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
          <MenuItem value={"Time"}>Time</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
