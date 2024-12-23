import { translate } from '../utils/translate';
import { useContext } from 'react';
import { LangContext } from './LangContext';

export const Footer = () => {
  const {lang} = useContext(LangContext);

  return (
    <footer>
      {translate('footer.greeting', lang)}
    </footer>
  );
}
