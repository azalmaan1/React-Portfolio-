import { motion } from 'framer-motion';

const aboutItems = [
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 5
  }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="bg-zinc-800/50 p-7 rounded-2xl md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p 
            className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Welcome! I&apos;m Abdirisak, frontend developer committed to delivering high-quality software solutions. My expertise includes HTML, CSS, JavaScript, and various frontend frameworks such as React and Angular. I am passionate about crafting responsive and interactive web applications that provide an excellent user experience.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-4 md:gap-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {aboutItems.map(({ label, number }, key) => (
              <motion.div 
                key={key} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + key * 0.2, duration: 0.8 }}
              >
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </motion.div>
            ))}

            <motion.img
              src="/images/logo1.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
