import { Box, TextField } from "@mui/material";

const ContractForm = () => {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <TextField
        style={{ backgroundColor: "white" }}
        placeholder="contract name"
      />
      <TextField
        style={{ backgroundColor: "white" }}
        placeholder="token symbol"
      />
    </Box>
  );
};

export default ContractForm;
