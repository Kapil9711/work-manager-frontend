import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function DateTimePickerCustom({ date, setDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <DateTimePicker
          className="bg-white rounded-xl"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#762311",
                borderWidth: "2px 4px",
                overflow: "hidden",

                // Default border color
              },
              "&:hover fieldset": {
                borderColor: "#762311",
                borderWidth: "2px 4px",
                // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#762311",
                borderWidth: "2px 4px",
                // Border color when focused
              },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
