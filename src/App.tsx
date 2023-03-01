import { Nav } from './components';
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
  </>
);

export default App;

