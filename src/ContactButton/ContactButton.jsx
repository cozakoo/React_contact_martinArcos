import React from 'react';
import './ContactButton.css';
import { motion } from "framer-motion";

export function ContactButton({ url, userName, iconFont }) {
  return (
    <motion.div
      className="contact-button rounded-full bg-slate-800 w-44 h-8 border-2 flex items-center"
      drag // Habilitar el arrastre
      whileHover={{ scale: 1.1 }} // Escalar cuando se pasa el mouse sobre el botón
    >
      <a href={url} className="ml-6" target="_blank" rel="noopener noreferrer">       
        <button>
          {iconFont} <span>&nbsp;</span> {userName}
        </button>
      </a>
    </motion.div>
  );
}   