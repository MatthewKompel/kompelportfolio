import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
// import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Platform-specific colors
const platformColors = {
  linkedin: '#0077b5',
  github: '#333333',
  email: '#ea4335',
  youtube: '#ff0000',
};

const styles = {
  iconStyle: {
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 10,
    transition: 'all 0.3s ease',
    borderRadius: '50%',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '2rem',
  },
};

function Social() {
  // const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const socialRef = useScrollAnimation('fade-in', 0.3);

  useEffect(() => {
    fetch(endpoints.social, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div
      ref={socialRef}
      style={styles.socialContainer}
    >
      {data ? data.social.map((social) => (
        <div
          key={social.network}
          style={{
            boxShadow: 'none', background: 'none', borderRadius: 0, padding: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'none';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'none';
          }}
        >
          <SocialIcon
            style={styles.iconStyle}
            url={social.href}
            network={social.network}
            target="_blank"
            rel="noopener"
            fgColor="white"
            bgColor={platformColors[social.network] || '#667eea'}
          />
        </div>
      )) : null}
    </div>
  );
}

export default Social;
