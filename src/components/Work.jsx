
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Exchange Web',
    tags: ['Development'],
    projectLink: 'https://globalsmartexchange.com/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: '#home'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: '#home'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: '#home'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: '#home'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: '#home'
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <motion.h2 
          className="headline-2 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My portfolio highlights
        </motion.h2>

        <motion.div 
          className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.3, ease: "easeOut" } }
          }}
        >
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <motion.div 
              key={key}
              variants={{
                hidden: { opacity: 0, y: 50, rotate: -5 },
                visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.7, ease: "backOut" } }
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <ProjectCard
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Work;