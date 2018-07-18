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
import styles from './AboutWebsite.scss';

const AboutWebsite = () => {
  const technologies = [
    {
      name: 'React',
      Logo: ReactLogo,
      fill: '#61DAFB',
      link: 'https://reactjs.org/',
    },
    {
      name: 'React Redux',
      Logo: ReduxLogo,
      fill: '#764ABC',
      link: 'https://redux.js.org/',
    },
    {
      name: 'React Router',
      Logo: ReactRouterLogo,
      link: 'https://reacttraining.com/react-router/',
    },
    {
      name: 'Javascript',
      Logo: JavascriptLogo,
      fill: '#F7DF1E',
      link: 'https://www.javascript.com/',
    },
    {
      name: 'Sass',
      Logo: SassLogo,
      fill: '#CC6699',
      link: 'https://sass-lang.com/',
    },
    {
      name: 'Babel',
      Logo: BabelLogo,
      width: 50,
      link: 'https://babeljs.io/',
    },
    {
      name: 'Webpack',
      Logo: WebpackLogo,
      fill: '#8DD6F9',
      link: 'https://webpack.js.org/',
    },
  ];

  const renderTechnologies = technologies.map(props => {
    const { Logo, name, fill = null, height = 30, width = 30, link } = props;

    return (
      <div className={styles.technology} key={name}>
        <h3 style={{ marginRight: '2rem' }}>{name}</h3>
        <a href={link} target="blank">
          <Logo className={styles.logo} height={height} width={width} fill={fill} />
        </a>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.wrapper}>
        <h1>This website is powered by</h1>
        <div className={styles.content}>{renderTechnologies}</div>
        <h2>Credits to these resources</h2>
        <div className={styles.logos}>
          <a className={styles.link} href="https://seeklogo.com/" target="blank">
            <h3>Seek Logo</h3>
          </a>
          <a className={styles.link} href="https://simpleicons.org/" target="blank">
            <h3>Simple Icons</h3>
          </a>
        </div>
      </div>
      <Footer className={styles.footer}/>
    </div>
  );
};

export default AboutWebsite;
