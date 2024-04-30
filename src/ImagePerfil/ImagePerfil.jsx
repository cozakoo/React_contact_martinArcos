import React from 'react';

export function ImagePerfil({ perfilImage, perfilImageHover, handleMouseEnter, handleMouseLeave, isHovered, rotateDegree }) {
    return (
        <div
        className="perfil-image-container "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `rotate(${rotateDegree}deg)` }}
        >
        <img
          src={isHovered ? perfilImageHover : perfilImage}
          alt="Perfil"
          className={`perfil-image border-2 border-teal-500 rounded-full h-32 w-32 bg-gradient-to-r animate__animated ${isHovered && perfilImageHover ? 'animate__flipInY' : 'animate__rotateIn'}`}
          />
      </div>
    );
}