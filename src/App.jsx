import React, { useState } from 'react';

// COMPONENTES
import { ContactButton } from './ContactButton/ContactButton.jsx';
import { ImagePerfil } from './ImagePerfil/ImagePerfil.jsx';
import { NombrePerfil } from './NombrePerfil/NombrePerfil.jsx';
import { FrasePerfil } from './FrasePerfil/FrasePerfil.jsx';

// ICONOS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'; 
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'; 
import { faCouch } from '@fortawesome/free-solid-svg-icons/faCouch'; 

import perfilImage from './assets/photoPerfil.png';
import perfilImageHover from './../public/logo.png';

import 'animate.css';
import './App.css';

const nombrePerfil = 'Martín Arcos Vargas';
const correo = 'martinarcosvargas2@gmail.com';

const frase = '"Al igual que un algoritmo encuentra su solución óptima, cada sendero nos lleva a descubrir nuestra propia ruta hacia el éxito. ¡Programa tu camino y conquista las cimas de la vida!"';

const botones = [
  {
    name: 'Couchsurfing',
    icon: faCouch,
    url: 'https://www.couchsurfing.com/people/martin-arcos',
  },

  {
    name: 'Facebook',
    icon: faFacebook,
    url: 'https://www.facebook.com/MartinArcosVargas/',
  },

  {
    name: 'Github',
    icon: faGithub,
    url: 'https://github.com/cozakoo',
  },

  {
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://www.instagram.com/martin_arcos_/?hl=es-la',
  },

  {
    name: 'Linkedin',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/martin-arcos',
  },

  {
    name: 'Twitter',
    icon: faXTwitter,
    url: 'https://twitter.com/MartinA98316703',
  },

  {
    name: 'WhatsApp',
    icon: faWhatsapp,
    url: 'https://api.whatsapp.com/send/?phone=5492804505803&text&type=phone_number&app_absent=0',
  },

];



function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateDegree, setRotateDegree] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateDegree(180); // Aplica el estilo rotateOut al salir del área de la imagen
  };
  
  return (
    <section className='App bg-stone-700 min-h-screen flex flex-col justify-center items-center text-center'>
      <ImagePerfil
        perfilImage={perfilImage}
        perfilImageHover={perfilImageHover}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isHovered={isHovered}
      />

      <NombrePerfil nombrePerfil={nombrePerfil} correo={correo} />
      <FrasePerfil frasePerfil={frase} />
      <br/>
      {
        botones.map(({ url, name, icon }) => (
          
          <ContactButton
            key={name}
            url={url}
            userName={name}
            iconFont={<FontAwesomeIcon icon={icon} />}
          />
        ))
      }

    </section>
  );
}

export default App;
