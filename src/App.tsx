import { useTranslation } from 'react-i18next';
import { Nav } from './components';
import './i18n';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Nav />
      <div className="text-10xl z-100">nice</div>
    </>
  );
}

export default App;

