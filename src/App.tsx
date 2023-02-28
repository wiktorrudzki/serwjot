import { useTranslation } from 'react-i18next';
import './i18n';

import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">{t('title')}</p>
      <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p>
    </div>
  );
}

export default App;
