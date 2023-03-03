import { Footer, Nav } from './features';
import { About, Contact, Gallery, Home, Services } from './sections';

import './i18n';

const App = () => (
  <>
    <Nav />
    <Home />
    <About />
    <Services />
    <Gallery />
    <Contact />
    <Footer />
  </>
);

export default App;

