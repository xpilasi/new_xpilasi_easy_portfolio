import * as React from "react";
import { motion } from "framer-motion";



 const Example = () => {
    const icon = {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      };
  <div className="container">
   <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0  
 0 300 138" // Ajusta el viewBox según tu SVG
      className="item"
    >
      <motion.path
        d='M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z'
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1]  
 }
        }}
      />
      {/* Resto de tu SVG */}
    </motion.svg>
  </div>
;

 }

    
export default Example;
