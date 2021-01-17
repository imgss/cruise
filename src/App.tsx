import React from 'react';
import { css } from '@emotion/css';
import 'assets/fontIcons/fonts.css';
import Header from 'layout/Header';
import Main from 'layout/Main';
import Footer from 'layout/Footer';

const styles = {
  app: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-width: 1200px;
    font-size: 14px;
  `,
};

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
