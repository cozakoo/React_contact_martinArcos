import React from 'react';
import './NombrePerfil.css';


export function NombrePerfil({ nombrePerfil, correo }) {
    return (
        <div>
            <h1 className="font-serif text-zinc-400 texto-nombre">{nombrePerfil}</h1>
            <span className="text-zinc-300 texto-correo">{correo}</span>
        </div>
    );
}