import { Box, Typography } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContractCreator from '../src/components/ContractCreator'

const Home: NextPage = () => {
  return (
    <Box sx={{backgroundColor: "#111827"}} className={styles.container}>
      <Head>
        <title>music nft factory</title>
        <meta
          name="description"
          content="claim page for cxy.eth"
        />
      </Head>

      <Box pt={3} sx={{display: "flex", justifyContent: "flex-end"}}>
        <ConnectButton />
      </Box>

      <main className={styles.main}>
        <ContractCreator />
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/SweetmanTech/rainbowkit-token-gated" target="_blank" rel="noopener noreferrer"><Typography color="white">Made with ❤️ by sweetman.eth</Typography>  </a> 
      </footer>
    </Box>
  );
};

export default Home;
