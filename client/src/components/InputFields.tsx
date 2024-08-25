import { TextField, Tooltip, Select, MenuItem } from "@mui/material";
import intervals from "../assets/intervalForSelect.json";

interface InputFieldsProps {
  ipAddress: string;
  setIpAddress: (value: string) => void;
  startTime: string;
  setStartTime: (value: string) => void;
  endTime: string;
  setEndTime: (value: string) => void;
  interval: string;
  setInterval: (value: string) => void;
}

export function InputFields({
  ipAddress,
  setIpAddress,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  interval,
  setInterval,
}: InputFieldsProps) {
  const startTooltipTitle = new Date(startTime) > new Date(endTime) ? "Start date cannot be after end date." : "Select date";
  const endTooltipTitle = new Date(endTime) < new Date(startTime) ? "End date cannot be before start date." : "Select date";

  return (
    <>
      <TextField
        label="IP Address"
        variant="outlined"
        sx={{ margin: 1 }}
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
      />
      <Tooltip title={startTooltipTitle} arrow>
        <TextField
          label="Start Time"
          type="datetime-local"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={startTime}
          sx={{ margin: 1 }}
          onChange={(event) => setStartTime(event.target.value)}
        />
      </Tooltip>
      <Tooltip title={endTooltipTitle} arrow>
        <TextField
          label="End Time"
          type="datetime-local"
          variant="outlined"
          sx={{ margin: 1 }}
          InputLabelProps={{ shrink: true }}
          value={endTime}
          onChange={(event) => setEndTime(event.target.value)}
        />
      </Tooltip>
      <Select value={interval} onChange={(event) => setInterval(event.target.value)} variant="outlined" sx={{ margin: 1, minWidth: 120 }}>
        {intervals.map((value) => (
          <MenuItem key={value.seconds} value={value.seconds}>
            {value.seconds} seconds {value.label && `- ${value.label}`}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
