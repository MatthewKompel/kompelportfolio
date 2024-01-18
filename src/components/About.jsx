import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import banff from '../banff.jpg';
import rowing from '../row2.png';
import piano from '../piano.png';
import drone from '../cutdrone.mp4';
import youtube from '../youtube.png';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
    fontSize: '1.2em',
    fontWeight: 500,

  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  introTextContainerRight: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
    fontSize: '1.2em',
    fontWeight: 500,

  },
  introImageContainerRight: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <Fade>
                <Row styl={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                  <Col style={styles.introTextContainer}>
                    {parseIntro(data.about)}
                  </Col>
                  <Col style={styles.introImageContainer}>
                    <img src={banff} alt="profile" style={{ width: '400px', height: '300px' }} />
                  </Col>
                </Row>
                <br />
                <h1>Passions and Hobbies</h1>
                <br />
                <h3>Rowing</h3>
                <br />
                <Row style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                  <Col style={styles.introImageContainerRight}>
                    <img src={rowing} alt="profile" style={{ width: '350px', height: '420px' }} />
                  </Col>
                  <Col style={styles.introTextContainerRight}>
                    {parseIntro("Athletics has always been a big part of my life, and I am proud to be a member of the rowing team representing Queen's University. This past season I rowed in a 4 man boat and competed at multiple regattas, including the Ontario University Athletics Championship!\n\nThroughout the duration of competition season, I commit over 20 hours a week to training with the team, while balancing school and other responsiblies.  This experience has shown me how valuable dedicaiton, time management, and consistency are when striving to reach your goals.")}
                  </Col>
                </Row>
                <br />
                <h3>Piano</h3>
                <br />
                <Row style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                  <Col style={styles.introTextContainer}>
                    {parseIntro('I have been playing the piano since I was a kid, and it has always been a great way for me to relax and have some personal time. I play a wide array of genres, anything from Christmas carols to movie soundtracks.')}
                  </Col>
                  <Col style={styles.introImageContainer}>
                    <img src={piano} alt="profile" style={{ width: '300px', height: '310px' }} />
                  </Col>
                </Row>
                <br />
                <h3>Drone Flying</h3>
                <br />
                <Row style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                  <Col style={styles.introImageContainerRight}>
                    <video controls={false} autoPlay loop muted style={{ width: '500px', height: '420px' }}>
                      <source src={drone} type="video/mp4" />
                    </video>
                  </Col>
                  <Col style={styles.introTextContainerRight}>
                    {parseIntro("I have a DJI Mini Pro 3 drone and I love flying it around when I'm travelling to a new area, or just exploring parts of my hometown.  It offers a really cool perspective, with views and angles of the area around me that I never would have imagined possible.\n\nThis hobby has also given me a chance to learn a lot more about lighting and camera shot quality, becuase there is so much that goes into getting the best drone footage possible.")}
                  </Col>
                </Row>
                <br />
                <h3>Video Making</h3>
                <br />
                <Row style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                  <Col style={styles.introTextContainer}>
                    {parseIntro('During my internship at STAN AI I began making videos going over different concepts and technologies I was using on a day to day basis. I try to make videos on things I struggled to understand in the first place, because I am sure there are others online who will struggle to understand them as well.\n\nFor now I have just stuck to software related vidoes, but in the future I hope to branch out to other topics as well.')}
                  </Col>
                  <Col style={styles.introImageContainer}>
                    <img src={youtube} alt="profile" style={{ width: '575px', height: '300px' }} />
                  </Col>
                </Row>
                <br />
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
