import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import { motion, useAnimation } from 'framer-motion';

// import { BsGithub } from 'react-icons/bs';
import { Button } from '@mui/material';
// import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';
// import Person from './components/Person';

const HomeLayout = () => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transtionEffects = {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth">
      <nav className="sticky top-0 z-20 h-14 w-full bg-resume-900 flex py-2.5 px-10 xl:px-60 items-center shadow-level-8dp">
        <Link href="/">
          <Image src={'/resume.jpg'} alt="logo" height="36" width="36" />
        </Link>
        <div className="flex-auto flex justify-between items-center ml-5">
          <NavBarActions>
            <Link href="/builder" passHref={true}>
              <StyledButton variant="text">CLA Resume Builder</StyledButton>
            </Link>
          </NavBarActions>
        </div>
      </nav>
      <div
        style={{
          background: 'linear-gradient(#F7F8F8,#717039)',
          fontFamily: 'sans-serif',
          height: '600px',
        }}
      >
        <div className="mx-6 md:mx-40 xl:mx-60 mb-6">
          <motion.div
            className="grid grid-cols-12 pt-12 md:pt-24"
            initial={{ opacity: 0 }}
            animate={animationEffectsFirstLoad}
            transition={transtionEffects}
          >
            <div className="col-span-12 sm:col-span-4">
              <motion.img
                id="resume-3d"
                src="/resume.jpg"
                alt="resume-3d"
                className="w-6/12 sm:w-9/12"
                onMouseEnter={() => {
                  controls.start(animationEffectsHoverEnter, transtionEffects);
                }}
                onMouseLeave={() => {
                  controls.start(animationEffectsHoverLeave, transtionEffects);
                }}
                animate={controls}
              />
            </div>
            <div className="col-span-12 sm:col-span-8">
              <h3 className="text-xl md:text-2xl mb-2 text-resume-400">
                Easiest Method to Craft a
              </h3>
              <h1 className="text-5xl mb-12 text-resume-800">Polished Resume</h1>
              <div className="flex mb-10">
                <div className="bg-resume-800 w-1 rounded-lg"></div>
                <p className="text-lg ml-3 text-resume-800">
                  The first step to success is taking the initial leap.
                  <br />
                  —CLA Global
                </p>
              </div>
              <Link href="/builder" passHref={true}>
                <Button variant="contained" className="bg-slate-700 mb-2 ml-12">
                  BUILD YOUR RESUME
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeLayout;
