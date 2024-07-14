import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export const Particle = () => {
   const particlesInit = useCallback(async (engine: Engine) => {
      console.log(engine);

      // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
   }, []);

   const particlesLoaded = useCallback(
      async (container: Container | undefined) => {
         await console.log(container);
      },
      []
   );
   return (
      <Particles
         id='tsparticles'
         init={particlesInit}
         loaded={particlesLoaded}
         options={{
            particles: {
               number: {
                  value: 80,
                  density: {
                     enable: true,
                     value_area: 800,
                  },
               },
               color: {
                  value: '#ffffff',
               },
               shape: {
                  type: 'edge',
                  stroke: {
                     width: 0.2,
                     color: '#ffffff',
                  },
                  polygon: {
                     nb_sides: 4,
                  },
                  image: {
                     src: '',
                     width: 100,
                     height: 100,
                  },
               },
               opacity: {
                  value: 0.08818766334760375,
                  random: false,
                  anim: {
                     enable: false,
                     speed: 0.1,
                     opacity_min: 0.1,
                     sync: false,
                  },
               },
               size: {
                  value: 50,
                  random: true,
                  anim: {
                     enable: false,
                     speed: 40,
                     size_min: 0.1,
                     sync: false,
                  },
               },
               line_linked: {
                  enable: false,
                  distance: 0,
                  color: '#ffffff',
                  opacity: 0.2919846274039409,
                  width: 1.736124811591,
               },
               move: {
                  enable: true,
                  speed: 3,
                  direction: 'top',
                  random: false,
                  straight: true,
                  out_mode: 'out',
                  bounce: false,
                  attract: {
                     enable: false,
                     rotateX: 801.7060304327614,
                     rotateY: 1202.559045649142,
                  },
               },
            },
            interactivity: {
               detect_on: 'canvas',
               events: {
                  onhover: {
                     enable: true,
                     mode: 'repulse',
                  },
                  onclick: {
                     enable: false,
                     mode: 'push',
                  },
                  resize: true,
               },
               modes: {
                  grab: {
                     distance: 400,
                     line_linked: {
                        opacity: 1,
                     },
                  },
                  bubble: {
                     distance: 400,
                     size: 40,
                     duration: 2,
                     opacity: 8,
                     speed: 3,
                  },
                  repulse: {
                     distance: 200,
                     duration: 0.4,
                  },
                  push: {
                     particles_nb: 4,
                  },
                  remove: {
                     particles_nb: 2,
                  },
               },
            },
            retina_detect: true,
         }}
      />
   );
};
