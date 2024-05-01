import React from 'react';
import './ImagePerfil.css';

export function ImagePerfil({ perfilImage, perfilImageHover, handleMouseEnter, handleMouseLeave, isHovered, rotateDegree }) {
  return (
      <div
          className="perfil-image-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ transform: `rotate(${rotateDegree}deg)` }}
      >

          <div className="perfil-image-wrapper">
              <img
                  src={isHovered ? perfilImageHover : perfilImage}
                  alt="Martin Arcos datos de contacto"
                  className={`perfil-image border-4 border-zinc-600 rounded-full bg-gradient-to-b animate__animated ${
                      isHovered && perfilImageHover ? 'animate__flipInY' : 'animate__rotateIn'
                  }`}
              />
          </div> 
      </div>
  );
}