import React from 'react';
import {databaseRef} from 'services/firebase';
import Header from 'personal_website/components/header/Header';
import Footer from 'personal_website/components/footer/Footer';
import styles from './AboutMe.scss';

class AboutMe extends React.PureComponent {
  state = {
    info: [
      {
        type: 'p',
        text: 'Gihooh agrees when Albert Einstein once said, "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid." He strongly believes that everybody has a potential to do great things. When you learn your strengths, you work towards enhancing them.',
      },
      {
        type: 'p',
        text: 'The first is a person who is into details, structures and high quality. He always looks forward to be a part of a team where everyone grows together, be it at work or in a circle of friends.',
      },
      {
        type: 'p',
        text: 'Let me share with you a few classified information about our guy. Did you know that he does singing as his part-time? Just kidding, but I tell you, he can sing a whole album in just one sitting.',
      },
      {
        type: 'p',
        text: 'Apart from the above, our Software Engineer loves Ramen that he can differentiate the taste even the texture of the noodles wherever he eats. When it comes to food (and other things), he has a habit of analyzing if he is getting enough of what he paid for. And yes, Japanese food is his favorite next to Filipino cuisine.',
      },
      {
        type: 'p',
        text: 'Recently, he discovered his interest into adventures such as extreme amusement park rides and pool slides. To all theme parks out there, please get ready.'
      },
      {
        type: 'p',
        text: 'Make your app, web and other ideas come to existence. Partner with a knowledgeable, accommodating and naturally witty developer.'
      },
      {
        type: 'p',
        text: "That's all for now! If you want more of my stories, you may let Gihooh know."
      }
    ]
  }

  componentDidMount() {
    databaseRef.child('personal').on('value', snapshot => {
      dispatch(fetchUserSuccess(snapshot.val()))
      dispatch(onLoadingEnd());
    })
  }

  render() {
    const { info } = this.state
    const message = info.map(o => {
      switch (o.type) {
        case 'p':
          return <p key={o.text}>{o.text}</p>
        default:
          return <p key={o.text}>{o.text}</p>
      }
    })
    return (
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

export default AboutMe;
