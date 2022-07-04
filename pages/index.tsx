import { Box, Typography } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MintButton from '../src/components/MintButton'

const Home: NextPage = () => {
  return (
    <Box sx={{backgroundColor: "#111827"}} className={styles.container}>
      <Head>
        <title>cxy.eth - claim page</title>
        <meta
          name="description"
          content="claim page for cxy.eth"
        />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <Typography mt={3} variant="h3" color="white">
          cxy.eth claim page 
        </Typography>
        <Typography mb={3} variant="caption" color="white">
          gift for collecting my first Ethereum nft ❤️
        </Typography>

        <video autoPlay controls loop style={{ width: '500px', height: '500px' }}>
          <source src="/video.mp4" />
        </video>

        <MintButton />
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/SweetmanTech/rainbowkit-token-gated" target="_blank" rel="noopener noreferrer"><Typography color="white">Made with ❤️ by sweetman.eth</Typography>  </a> 
      </footer>
    </Box>
  );
};

export default Home;
