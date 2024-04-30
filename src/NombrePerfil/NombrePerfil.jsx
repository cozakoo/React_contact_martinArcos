import React from 'react';

export function NombrePerfil({ nombrePerfil, correo }) {
    return (
        <div>
            <h1 className="font-serif text-zinc-200">{nombrePerfil}</h1>
            <span className="text-zinc-400">{correo}</span>
        </div>
    );
}