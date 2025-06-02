import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
// import prof from '../prof2.jpg';
import row from '../row.png';
// import piano from '../piano.png';
// import headshot from '../headshot.jpg';
import skiing from '../skiing.jpg';
import grad from '../grad2.jpg';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '350px', // Adjust the width as needed
    height: '350px', // Adjust the height as needed
    borderRadius: '50%', // Makes the container circular
    overflow: 'hidden', // Ensures the image doesn't overflow the container
    border: '2px solid #fff', // Border around the circular frame
    boxSizing: 'border-box', // Ensures the border is included in the dimension
    margin: '0 40px',
  },
  imageContainer2: {
    width: '200px', // Adjust the width as needed
    height: '200px', // Adjust the height as needed
    borderRadius: '50%', // Makes the container circular
    overflow: 'hidden', // Ensures the image doesn't overflow the container
    border: '2px solid #fff', // Border around the circular frame
    boxSizing: 'border-box', // Ensures the border is included in the dimensions,
    marginTop: '9%',
  },
  imageContainer3: {
    width: '200px', // Adjust the width as needed
    height: '200px', // Adjust the height as needed
    borderRadius: '50%', // Makes the container circular
    overflow: 'hidden', // Ensures the image doesn't overflow the container
    border: '2px solid #fff', // Border around the circular frame
    boxSizing: 'border-box', // Ensures the border is included in the dimensions,
    marginTop: '9%',
  },
  image: {
    width: '100%', // Ensures the image takes up the entire circular frame
    height: '100%',
    objectFit: 'cover', // Maintains the aspect ratio and covers the entire frame
  },
};

function Home() {
  const [data, setData] = useState(null);

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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={styles.imageContainer3}>
            <img
              src={row} // Replace with your actual image source
              alt="Your Alt Text"
              style={styles.image}
            />
          </div>
          <div style={styles.imageContainer}>
            <img
              src={grad} // Replace with your actual image source
              alt="Your Alt Text"
              style={styles.image}
            />
          </div>
          <div style={styles.imageContainer2}>
            <img
              src={skiing} // Replace with your actual image source
              alt="Your Alt Text"
              style={styles.image}
            />
          </div>
        </div>
        <h1 style={styles.nameStyle}>{data?.name}</h1>
        <div style={{ flexDirection: 'row' }}>
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              loop: false,
              autoStart: true,
              strings: "a Software Developer and Computer Science graduate from Queen's University.",
              delay: 15,
            }}
          />
        </div>
        <Social />
      </div>
    </Fade>
  ) : <FallbackSpinner />;
}

export default Home;
