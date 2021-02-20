import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import localeData from "./locales/languages.json";
import { IntlProvider } from "react-intl";

// @ts-ignore
const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
// @ts-ignore
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

ReactDOM.render(
  <React.StrictMode>
      <IntlProvider locale={language} messages={messages}>
          <App />
      </IntlProvider>,
  </React.StrictMode>,
  document.getElementById('duck')
);

reportWebVitals(console.log);
