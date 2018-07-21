import React from 'react';
import Header from 'personal_website/components/header/Header';
import Footer from 'personal_website/components/footer/Footer';
import ReactLogo from 'personal_website/assets/images/brands/react.svg';
import ReactRouterLogo from 'personal_website/assets/images/brands/reactrouter.svg';
import ReduxLogo from 'personal_website/assets/images/brands/redux.svg';
import JavascriptLogo from 'personal_website/assets/images/brands/javascript.svg';
import SassLogo from 'personal_website/assets/images/brands/sass.svg';
import BabelLogo from 'personal_website/assets/images/brands/babel.svg';
import WebpackLogo from 'personal_website/assets/images/brands/webpack.svg';
import Gallery from './Gallery';
import styles from './AboutWebsite.scss';

const AboutWebsite = () => {
  const technologies = [
    {
      name: 'React',
      Logo: ReactLogo,
      fill: '#61DAFB',
      link: 'https://reactjs.org/',
      description: 'Chosen frontend library to build this website. Promotes reusability due to its component based approach.',
    },
    {
      name: 'React Redux',
      Logo: ReduxLogo,
      fill: '#764ABC',
      link: 'https://redux.js.org/',
      description: 'Used to ease state handling. Made this application more predicatable to find bugs easier.',
    },
    {
      name: 'React Router',
      Logo: ReactRouterLogo,
      link: 'https://reacttraining.com/react-router/',
      description: 'For easier handling of navigations. For easier development of Single Page Application.',
    },
    {
      name: 'Javascript',
      Logo: JavascriptLogo,
      fill: '#F7DF1E',
      link: 'https://www.javascript.com/',
      description: 'Chosen language for general purpose programming.',
    },
    {
      name: 'Sass',
      Logo: SassLogo,
      fill: '#CC6699',
      link: 'https://sass-lang.com/',
      description: 'CSS Transpiler for easier and more modular design.',
    },
    {
      name: 'Babel',
      Logo: BabelLogo,
      link: 'https://babeljs.io/',
      description: 'Javascript transpiler for browser compatility.',
    },
    {
      name: 'Webpack',
      Logo: WebpackLogo,
      fill: '#8DD6F9',
      link: 'https://webpack.js.org/',
      description: 'Development workflow',
    },
  ];

  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.wrapper}>
        <h1>This website is powered by</h1>
        <div className={styles.content}>
          <Gallery data={technologies} />
        </div>
        <h2>Credits to these resources</h2>
        <div className={styles.logos}>
          <a className={styles.link} href="https://seeklogo.com" target="blank">
            <h3>Seek Logo</h3>
          </a>
          <a className={styles.link} href="https://simpleicons.org" target="blank">
            <h3>Simple Icons</h3>
          </a>
          <a className={styles.link} href="https://www.flaticon.com" target="blank">
            <h3>Flat Icon</h3>
          </a>
        </div>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default AboutWebsite;
