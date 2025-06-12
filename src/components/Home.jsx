import React, { useState, useEffect, useContext } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import useScrollAnimation from '../hooks/useScrollAnimation';
// import prof from '../prof2.jpg';
import row from '../row.png';
// import piano from '../piano.png';
// import headshot from '../headshot.jpg';
import skiing from '../skiing.jpg';
import grad from '../grad2.jpg';

function Home() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const imageSectionRef = useScrollAnimation('fade-in', 0.3);
  const nameRef = useScrollAnimation('scale-in', 0.5);
  const typewriterRef = useScrollAnimation('fade-in', 0.3);
  const socialRef = useScrollAnimation('fade-in', 0.3);

  const styles = {
    nameStyle: {
      fontSize: '4rem',
      fontWeight: 700,
      marginBottom: '1rem',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: theme.gradient,
      backgroundClip: 'text',
    },
    inlineChild: {
      display: 'inline-block',
      fontSize: '1.5rem',
      fontWeight: 500,
      color: theme.color,
    },
    mainContainer: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem 1rem',
      background: theme.background,
      transition: 'all 0.3s ease',
    },
    imageSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
    },
    imageContainer: {
      width: '280px',
      height: '280px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '4px solid rgba(255, 255, 255, 0.2)',
      boxShadow: theme.shadow,
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    imageContainer2: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '4px solid rgba(255, 255, 255, 0.2)',
      boxShadow: theme.shadow,
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    imageContainer3: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '4px solid rgba(255, 255, 255, 0.2)',
      boxShadow: theme.shadow,
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.3s ease',
    },
    typewriterContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'nowrap',
      gap: '0.5rem',
      marginBottom: '2rem',
      maxWidth: '1500px',
      minWidth: '900px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
    },
    typewriterText: {
      fontSize: '2rem',
      fontWeight: 500,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: theme.color,
      backgroundClip: 'text',
      color: theme.color,
      lineHeight: 1.2,
      display: 'inline-block',
    },
    contentSection: {
      textAlign: 'center',
      maxWidth: '1500px',
      margin: '0 auto',
      flexDirection: 'row',
    },
  };

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade>
      <div style={styles.mainContainer}>
        <div style={styles.contentSection}>
          <div
            ref={imageSectionRef}
            style={styles.imageSection}
          >
            <div
              style={styles.imageContainer3}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = theme.shadowHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = theme.shadow;
              }}
            >
              <img
                src={row}
                alt="Rowing"
                style={styles.image}
              />
            </div>
            <div
              style={styles.imageContainer}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = theme.shadowHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = theme.shadow;
              }}
            >
              <img
                src={grad}
                alt="Graduation"
                style={styles.image}
              />
            </div>
            <div
              style={styles.imageContainer2}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = theme.shadowHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = theme.shadow;
              }}
            >
              <img
                src={skiing}
                alt="Skiing"
                style={styles.image}
              />
            </div>
          </div>

          <h1
            ref={nameRef}
            style={styles.nameStyle}
          >
            {data?.name}
          </h1>

          <div
            ref={typewriterRef}
            style={styles.typewriterContainer}
          >
            <span style={styles.typewriterText}>
              <Typewriter
                options={{
                  loop: false,
                  autoStart: true,
                  strings: "I'm a Software Developer and Computer Science graduate from Queen's University.",
                  delay: 15,
                }}
              />
            </span>
          </div>

          <div ref={socialRef}>
            <Social />
          </div>
        </div>
      </div>
    </Fade>
  ) : <FallbackSpinner />;
}

export default Home;
