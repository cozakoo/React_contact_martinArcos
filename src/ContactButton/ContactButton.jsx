import React from 'react';
import './ContactButton.css';


export function ContactButton({ url, userName, iconFont }) {
  return (
    <div className="contact-button rounded-full bg-slate-800 w-52 h-10 border-2 flex items-center"
         style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}>
      <a href={url} className="text-xl ml-6" target="_blank" rel="noopener noreferrer">       
        <button>
          {iconFont} <span>&nbsp;</span> {userName}
        </button>
      </a>
    </div>
  );
}