import { useTranslation } from 'react-i18next';
import { Nav } from './components';
import './i18n';
import { About, Home } from './sections';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Nav />
      <Home />
      <About />
    </>
  );
}

export default App;

