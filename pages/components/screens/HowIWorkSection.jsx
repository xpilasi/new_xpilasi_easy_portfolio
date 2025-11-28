import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaCheckCircle } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import useMenuStore from '@/store/menuStore.js';
import SectionHeader from '../../../components/widgets/SectionHeader';

const HowIWorkSection = () => {
  const { darkMode } = useMenuStore();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom }
    })
  };

  const phases = [
    {
      icon: <FaBrain className="text-6xl" />,
      title: "I Design",
      time: "30 min",
      description: "Architecture, data flow, user experience, business logic",
      gradient: "from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600",
      delay: 0
    },
    {
      icon: <FaRobot className="text-6xl" />,
      title: "AI Implements",
      time: "2 hours",
      description: "Code generation, patterns, components—under my direction",
      gradient: "from-purple-500 to-indigo-400 dark:from-purple-600 dark:to-indigo-500",
      delay: 0.2
    },
    {
      icon: <FaCheckCircle className="text-6xl" />,
      title: "I Validate",
      time: "1 hour",
      description: "Testing, debugging, optimization, quality assurance",
      gradient: "from-indigo-400 to-purple-400 dark:from-indigo-500 dark:to-purple-500",
      delay: 0.4
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20" id="how-i-work">

      <SectionHeader
        title="How I Work"
        subtitle="Build-Ship-Iterate methodology: where strategic thinking meets AI efficiency"
        highlightedText="Build-Ship-Iterate"
      />

      {/* Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl mb-12">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            custom={phase.delay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={`group relative bg-gradient-to-br ${phase.gradient} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer backdrop-blur-sm overflow-hidden`}
          >
            {/* Icon */}
            <div className="flex justify-center items-center mb-4 transform group-hover:scale-110 transition-transform duration-300 text-white">
              {phase.icon}
            </div>

            {/* Title */}
            <h3 className="text-3xl font-interDisplayMedium font-bold text-center text-white mb-2">
              {phase.title}
            </h3>

            {/* Time badge */}
            {/* <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-interDisplayLight text-white">
                <HiLightningBolt className="text-yellow-300" />
                {phase.time}
              </span>
            </div> */}

            {/* Description */}
            <p className="text-center text-white/90 font-interDisplayExtraLight text-sm leading-relaxed">
              {phase.description}
            </p>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center max-w-2xl"
      >
        <p className={`text-lg font-interDisplayLight ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
          Result: <span className={`font-interDisplayMedium ${darkMode ? 'text-neon-water' : 'text-indigo-600'}`}>Clearer alignment between business requirements and technical delivery</span> , reducing the usual back-and-forth.
        </p>
      </motion.div>

    </section>
  );
};

export default HowIWorkSection;
