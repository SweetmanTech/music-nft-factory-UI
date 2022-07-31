import { Typography } from "@mui/material";
import MintButton from "../MintButton";
import ContractForm from "../ContractForm";

const ContractCreator = () => {
  return (
    <>
      <Typography mt={3} variant="h3" color="white">
        music nft
      </Typography>
      <Typography mb={3} variant="caption" color="white">
        create your smart contract ❤️
      </Typography>

      <ContractForm />

      <MintButton />
    </>
  );
};

export default ContractCreator;
