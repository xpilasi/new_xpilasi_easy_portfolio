import React from 'react';
import { motion } from 'framer-motion';
import useMenuStore from '@/store/menuStore.js';

const SectionHeader = ({
  title,
  subtitle,
  highlightedText = null,
  highlightColor = null,
  maxWidth = "max-w-3xl",
  centered = true
}) => {
  const { darkMode } = useMenuStore();

  // Default highlight color if not provided
  const defaultHighlightColor = darkMode ? 'text-neon-green' : 'text-indigo-600';
  const finalHighlightColor = highlightColor || defaultHighlightColor;

  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${maxWidth}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-5xl md:text-6xl font-interDisplayMedium font-bold tracking-tight mb-4`}>
          {title}
        </h2>

        {subtitle && (
          <p className={`text-xl font-interDisplayLight ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
            {highlightedText ? (
              <>
                {subtitle.split(highlightedText)[0]}
                <span className={`font-interDisplayMedium ${finalHighlightColor}`}>
                  {highlightedText}
                </span>
                {subtitle.split(highlightedText)[1]}
              </>
            ) : (
              subtitle
            )}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeader;
