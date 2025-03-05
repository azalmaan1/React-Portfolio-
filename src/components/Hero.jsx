import { motion } from "framer-motion";
import { ButtonPrimary, ButtonOutline } from "./Button";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src="/images/avatar.jpg"
                width={40}
                height={40}
                alt="abdirisak portrait"
                className="img-cover"
              />
            </figure>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide"
            >
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </motion.div>
          </div>

          <motion.h2
            className="headline-1 max-w-full mt-5 mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-5xl font-extralight inline"> I'm a{" "}</span>
            <span className="text-3xl font-sans inline">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Graphic Designer",
                    "Digital Marketer",
                    "Content Creator",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </motion.h2>

          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <ButtonPrimary label="Download CV" icon="download" href="https://drive.google.com/file/d/1IgT3DU8_ltWe3LGLgeEYg6fI7tQ0KwXU/view?usp=sharing" />
            <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              src="/images/hero-banner1.png"
              width={656}
              height={800}
              alt="Henry Clark"
              className="w-full"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
