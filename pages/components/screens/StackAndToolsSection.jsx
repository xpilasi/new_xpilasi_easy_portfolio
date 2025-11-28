import React from 'react';
import { motion } from 'framer-motion';
import { SiVuedotjs, SiTailwindcss, SiSupabase, SiFigma, SiNotion, SiGithub } from 'react-icons/si';
import { FaRobot, FaServer, FaCode } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import useMenuStore from '@/store/menuStore.js';
import SectionHeader from '../../../components/widgets/SectionHeader';

const StackAndToolsSection = () => {
  const { darkMode } = useMenuStore();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: custom }
    })
  };

  const categories = [
    {
      title: "AI-Augmented",
      icon: <FaRobot className="text-4xl" />,
      gradient: "from-neon-orange via-neon-pink to-neon-blueberry",
      tools: [
        { name: "Claude Code", icon: <HiSparkles /> },
        { name: "Cursor IDE", icon: <FaCode /> },
        { name: "MCP Servers", icon: <FaServer /> }
      ],
      delay: 0
    },
    {
      title: "Frontend",
      icon: <SiVuedotjs className="text-4xl" />,
      gradient: "from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600",
      tools: [
        { name: "Vue.js 3", icon: <SiVuedotjs /> },
        { name: "Vite", icon: <HiSparkles /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ],
      delay: 0.15
    },
    {
      title: "Backend & Cloud",
      icon: <FaServer className="text-4xl" />,
      gradient: "from-purple-500 to-indigo-400 dark:from-purple-600 dark:to-indigo-500",
      tools: [
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "Render", icon: <FaServer /> },
        { name: "Netlify", icon: <HiSparkles /> }
      ],
      delay: 0.3
    },
    {
      title: "Design & PM",
      icon: <SiFigma className="text-4xl" />,
      gradient: "from-indigo-400 to-purple-400 dark:from-indigo-500 dark:to-purple-500",
      tools: [
        { name: "Figma", icon: <SiFigma /> },
        { name: "Notion", icon: <SiNotion /> },
        { name: "GitHub", icon: <SiGithub /> }
      ],
      delay: 0.45
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-20" id="stack-tools">

      <div className="mb-4">
        <SectionHeader
          title="Stack & Tools"
          subtitle="Modern tooling for rapid, quality delivery"
          highlightedText="rapid, quality delivery"
        />
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            custom={category.delay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col"
          >
            {/* Category Header Card */}
            <div className={`group bg-gradient-to-br ${category.gradient} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer backdrop-blur-sm mb-4`}>
              <div className="flex flex-col items-center">
                <div className="text-white mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-interDisplayMedium font-bold text-white text-center">
                  {category.title}
                </h3>
              </div>
            </div>

            {/* Tools List */}
            <div className="space-y-2">
              {category.tools.map((tool, toolIndex) => (
                <motion.div
                  key={toolIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: category.delay + 0.1 * (toolIndex + 1) }}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                    darkMode
                      ? 'bg-new-neon hover:bg-new-neon2'
                      : 'bg-gray-100 hover:bg-gray-200'
                  } transition-colors duration-300 group/tool`}
                >
                  <span className={`text-lg ${
                    darkMode ? 'text-neon-green' : 'text-indigo-600'
                  } group-hover/tool:scale-110 transition-transform duration-200`}>
                    {tool.icon}
                  </span>
                  <span className={`text-sm font-interDisplayLight ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center max-w-2xl mt-16"
      >
        <p className={`text-base font-interDisplayExtraLight ${darkMode ? 'text-gray-500' : 'text-gray-500'} italic`}>
          Technology agnostic approach: I understand the concepts, AI handles the syntax variations
        </p>
      </motion.div>

    </section>
  );
};

export default StackAndToolsSection;
