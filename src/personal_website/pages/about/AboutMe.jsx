import React from 'react';
import { connect } from 'react-redux';
import Header from 'personal_website/components/header/Header';
import Footer from 'personal_website/components/footer/Footer';
import { fetchAboutMe } from 'store/actions/about';
import LoadingMask from 'personal_website/components/loading/LoadingMask';
import styles from './AboutMe.scss';

class AboutMe extends React.PureComponent<{ aboutMe: Array, fetchAbout: Function, loading: boolean }> {
  componentDidMount() {
    const { fetchAbout } = this.props;
    fetchAbout();
  }

  render() {
    const { loading, aboutMe } = this.props;
    const message = aboutMe.map(o => {
      switch (o.type) {
        case 'p':
          return <p key={o.text}>{o.text}</p>
        default:
          return <p key={o.text}>{o.text}</p>
      }
    })
    return loading ? (
      <LoadingMask />
    ) : (
        <div className={styles.container}>
          <Header className={styles.header} />
          <div className={styles.content}>
            <h1>
              About Me
          </h1>
            {message}
          </div>
          <Footer />
        </div>
      );
  }
}

const mapStateToProps = state => ({
  aboutMe: state.about.texts,
  loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchAbout: () => dispatch(fetchAboutMe()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutMe);
