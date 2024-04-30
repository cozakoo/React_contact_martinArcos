import React from 'react';

export function NombrePerfil({ nombrePerfil, correo }) {
    return (
        <div>
            <h1 className="text-[30px] font-serif text-zinc-200">{nombrePerfil}</h1>
            <h2 className="text-[15px] font-serif text-zinc-400">{correo}</h2>
        </div>
    );
}