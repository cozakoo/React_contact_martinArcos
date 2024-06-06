import React, { useState } from 'react';

// COMPONENTES
import { ContactButton } from './ContactButton/ContactButton.jsx';
import { ImagePerfil } from './ImagePerfil/ImagePerfil.jsx';
import { NombrePerfil } from './NombrePerfil/NombrePerfil.jsx';
import { FrasePerfil } from './FrasePerfil/FrasePerfil.jsx';
import { VideoBackground } from './VideoBackground/VideoBackground.jsx';

// ICONOS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'; 
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'; 
import { faCouch } from '@fortawesome/free-solid-svg-icons/faCouch'; 

import videoBack from './assets/background.mp4';

import perfilImage from './assets/perfil1.png';
import perfilImageHover from './assets/perfil2.png';


import 'animate.css';
import './App.css';

const nombrePerfil = 'Martín Arcos Vargas';
const correo = 'martinarcosvargas2@gmail.com';

const frase = '"En la programación y en el trekking, cada paso es un progreso hacia nuevas alturas y logros emocionantes."';

const botones = [
  {
    name: 'Couchsurfing',
    // icon: faCouch,
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
    name: 'Portafolio',
    // icon: ,
    url: 'https://arcosvargas.com/',
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
  {
    name: 'Workaway',
    // icon: ,
    url: 'https://www.workaway.info/es/workawayer/MartinArcos/overview',
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
  };
  
  return (
    <section className='App  flex flex-col  items-center text-center'>

      <br/>

      <VideoBackground
        videoSource={videoBack}
      />

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
