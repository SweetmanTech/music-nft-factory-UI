import { Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";

const MintButton = () => {
  const { data: address } = useAccount();

  const handleClick = () => {
    if (!address) {
      toast.error("Please connect wallet.");
      return;
    }
    console.log("ADDRESS", address.address);

    console.log("CHECK IF CXY");
  };

  return (
    <Box m={3}>
      <Button onClick={handleClick} size="large" variant="contained">
        Mint
      </Button>
    </Box>
  );
};

export default MintButton;
