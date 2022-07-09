import { Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import { useAccount, useContract, useSigner } from "wagmi";
import abi from "./abi.json";

const MintButton = () => {
  const { data: address } = useAccount();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: "0x1e9A06ec825cf8A7341D344B1f2F2F0386542Ca3",
    contractInterface: abi,
    signerOrProvider: signer,
  });

  const handleClick = () => {
    if (!address) {
      toast.error("Please connect wallet.");
      return;
    }
    console.log("ADDRESS", address.address);

    console.log("CHECK IF CXY");
    console.log("CONTRACT", contract);
    contract
      .claim()
      .then(async (tx) => {
        console.log("TX", tx);
        const receipt = await tx.wait();
        console.log("RECEIPT", receipt);
        toast.success("Minted CXY");
      })
      .catch((error) => {
        toast.error(error?.reason || error.message);
        console.error(error);
      });
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
