import './App.css';
import { GoToTop } from './components/goToTop/GoToTop';
import { Particle } from './components/particle/Particle';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Contact } from './layout/sections/contact/Contact';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';
import { Skills } from './layout/sections/skills/Skills';

function App() {
   return (
      <div className='App'>
         <Particle />
         <Header />
         <Main />
         <Skills />
         <Projects />
         <About />
         <Contact />
         <Footer />
         <GoToTop />
      </div>
   );
}

export default App;
