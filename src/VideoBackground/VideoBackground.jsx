import React from 'react';
import './VideoBackground.css';

export function VideoBackground({ videoSource }) {
    return (
        <video autoPlay muted loop className="video-bg">
            <source src={videoSource} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
        </video>
    );
}

