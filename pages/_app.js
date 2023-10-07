import Layout from '../components/Layout';
import Transition from '../components/Transition';
import '../styles/globals.css';
//router 
import { useRouter } from 'next/router';

//framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.dev key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.dev>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp;
