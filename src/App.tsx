import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './theme';
import * as S from './App.styles';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Languages from './components/Languages';
import Links from './components/Links';
import ThemeToggleButton from './components/ThemeToggleButton';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <S.Main
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <S.Section>
          <Header />
          <S.Divider />
          <About />
        </S.Section>

        <Projects />
        <Awards />
        <Certifications />
        <Skills />
        <Experiences />
        <Languages />
        <Links />
      </S.Main>
    </ThemeProvider>
  );
};

export default App;