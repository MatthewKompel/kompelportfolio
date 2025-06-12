import React, { useState, useEffect, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import useScrollAnimation from '../hooks/useScrollAnimation';
import banff from '../banff.jpg';
import rowing from '../row2.png';
import piano from '../piano.png';
import drone from '../droneshot.png';
import youtube from '../youtube.png';

function About() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  // Scroll animation refs
  const introRef = useScrollAnimation('fade-in', 0.3);
  const passionsTitleRef = useScrollAnimation('fade-in', 0.3);
  const rowingRef = useScrollAnimation('slide-in-left', 0.3);
  const pianoRef = useScrollAnimation('slide-in-right', 0.3);
  const droneRef = useScrollAnimation('slide-in-left', 0.3);
  const videoRef = useScrollAnimation('slide-in-right', 0.3);

  const styles = {
    introTextContainer: {
      margin: '2rem 0',
      flexDirection: 'column',
      whiteSpace: 'pre-wrap',
      textAlign: 'left',
      fontSize: '1.1rem',
      fontWeight: 400,
      lineHeight: 1.8,
      color: theme.color,
      padding: '0 2rem',
    },
    introImageContainer: {
      margin: '2rem 0',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      padding: '0 2rem',
    },
    introTextContainerRight: {
      margin: '2rem 0',
      flexDirection: 'column',
      whiteSpace: 'pre-wrap',
      textAlign: 'left',
      fontSize: '1.1rem',
      fontWeight: 400,
      lineHeight: 1.8,
      color: theme.color,
      padding: '0 2rem',
    },
    introImageContainerRight: {
      margin: '2rem 0',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      padding: '0 2rem',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      textAlign: 'center',
      margin: '3rem 0 2rem 0',
      background: theme.gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    hobbyTitle: {
      fontSize: '2rem',
      fontWeight: 600,
      textAlign: 'center',
      margin: '2rem 0 1rem 0',
      color: theme.color,
    },
    imageStyle: {
      borderRadius: '16px',
      boxShadow: theme.shadow,
      transition: 'all 0.3s ease',
      maxWidth: '100%',
      height: 'auto',
    },
    sectionContainer: {
      padding: '2rem 3rem',
      margin: '2rem 2rem',
      borderRadius: '16px',
      background: theme.cardBackground,
      backdropFilter: 'blur(10px)',
      boxShadow: theme.shadow,
      border: `1px solid ${theme.cardBorderColor}`,
    },
    aboutSection: {
      padding: '3rem 0',
      background: theme.background,
      minHeight: '100vh',
      transition: 'all 0.3s ease',
    },
  };

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
      <div style={styles.aboutSection}>
        <div className="section-content-container">
          <Container>
            {data
              ? (
                <Fade>
                  <div
                    ref={introRef}
                    style={styles.sectionContainer}
                  >
                    <Row style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                      <Col lg={6} style={styles.introTextContainer}>
                        {parseIntro(data.about)}
                      </Col>
                      <Col lg={6} style={styles.introImageContainer}>
                        <img
                          src={banff}
                          alt="Banff"
                          style={styles.imageStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = theme.shadowHover;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = theme.shadow;
                          }}
                        />
                      </Col>
                    </Row>
                  </div>

                  <h1
                    ref={passionsTitleRef}
                    style={styles.sectionTitle}
                  >
                    Passions and Hobbies
                  </h1>

                  <div
                    ref={rowingRef}
                    style={styles.sectionContainer}
                  >
                    <h3 style={styles.hobbyTitle}>Rowing</h3>
                    <Row style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                      <Col lg={6} style={styles.introImageContainerRight}>
                        <img
                          src={rowing}
                          alt="Rowing"
                          style={styles.imageStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = theme.shadowHover;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = theme.shadow;
                          }}
                        />
                      </Col>
                      <Col lg={6} style={styles.introTextContainerRight}>
                        {parseIntro("Athletics has always been a big part of my life, and I am proud to be a member of the rowing team representing Queen's University. This past season I rowed in a 4 man boat and competed at multiple regattas, including the Ontario University Athletics Championship!\n\nThroughout the duration of competition season, I commit over 20 hours a week to training with the team, while balancing school and other responsiblies.  This experience has shown me how valuable dedicaiton, time management, and consistency are when striving to reach your goals.")}
                      </Col>
                    </Row>
                  </div>

                  <div
                    ref={pianoRef}
                    style={styles.sectionContainer}
                  >
                    <h3 style={styles.hobbyTitle}>Piano</h3>
                    <Row style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                      <Col lg={6} style={styles.introTextContainer}>
                        {parseIntro('I have been playing the piano since I was a kid, and it has always been a great way for me to relax and have some personal time. I play a wide array of genres, anything from Christmas carols to movie soundtracks.')}
                      </Col>
                      <Col lg={6} style={styles.introImageContainer}>
                        <img
                          src={piano}
                          alt="Piano"
                          style={styles.imageStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = theme.shadowHover;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = theme.shadow;
                          }}
                        />
                      </Col>
                    </Row>
                  </div>

                  <div
                    ref={droneRef}
                    style={styles.sectionContainer}
                  >
                    <h3 style={styles.hobbyTitle}>Drone Flying</h3>
                    <Row style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                      <Col lg={6} style={styles.introImageContainerRight}>
                        <img
                          src={drone}
                          alt="Drone"
                          style={styles.imageStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = theme.shadowHover;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = theme.shadow;
                          }}
                        />
                      </Col>
                      <Col lg={6} style={styles.introTextContainerRight}>
                        {parseIntro("I have a DJI Mini Pro 3 drone and I love flying it around when I'm travelling to a new area, or just exploring parts of my hometown.  It offers a really cool perspective, with views and angles of the area around me that I never would have imagined possible.\n\nThis hobby has also given me a chance to learn a lot more about lighting and camera shot quality, becuase there is so much that goes into getting the best drone footage possible.")}
                      </Col>
                    </Row>
                  </div>

                  <div
                    ref={videoRef}
                    style={styles.sectionContainer}
                  >
                    <h3 style={styles.hobbyTitle}>Video Making</h3>
                    <Row style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                      <Col lg={6} style={styles.introTextContainer}>
                        {parseIntro('During my internship at STAN AI, I began making videos going over different concepts and technologies I was using on a day to day basis. I try to make videos on things I struggled to understand in the first place, because I am sure there are others online who will struggle to understand them as well.\n\nFor now I have just stuck to software related vidoes, but in the future I hope to branch out to other topics as well.')}
                      </Col>
                      <Col lg={6} style={styles.introImageContainer}>
                        <img
                          src={youtube}
                          alt="YouTube"
                          style={styles.imageStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            e.currentTarget.style.boxShadow = theme.shadowHover;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = theme.shadow;
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                </Fade>
              )
              : <FallbackSpinner />}
          </Container>
        </div>
      </div>
    </>
  );
}

export default About;
