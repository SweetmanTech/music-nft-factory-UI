import { Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import { useAccount, useContract, useSigner } from "wagmi";
import abi from "./abi.json";

const MintButton = () => {
  const { data: address } = useAccount();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: process.env.NEXT_PUBLIC_FACTORY_ADDRESS,
    contractInterface: abi,
    signerOrProvider: signer,
  });

  const handleClick = () => {
    if (!address) {
      toast.error("Please connect wallet.");
      return;
    }

    contract
      .createMusicNft("music nft factory", "music")
      .then(async (tx) => {
        const receipt = await tx.wait();
        toast.success("minted music nft");
      })
      .catch((error) => {
        toast.error(error?.reason || error.message);
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
