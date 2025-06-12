import React, { useContext } from 'react';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Resume() {
  const theme = useContext(ThemeContext);
  const resumeRef = useScrollAnimation('fade-in', 0.3);

  const styles = {
    resumeSection: {
      padding: '3rem 0',
      background: theme.background,
      minHeight: '100vh',
      transition: 'all 0.3s ease',
    },
    resumeContainer: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '2rem',
      background: theme.cardBackground,
      borderRadius: '16px',
      boxShadow: theme.shadow,
      backdropFilter: 'blur(10px)',
      border: `1px solid ${theme.cardBorderColor}`,
    },
    downloadButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 2rem',
      marginBottom: '2rem',
      background: theme.gradient,
      color: 'white',
      textDecoration: 'none',
      borderRadius: '12px',
      fontWeight: 600,
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
      boxShadow: theme.shadow,
      border: 'none',
      cursor: 'pointer',
    },
    pdfContainer: {
      width: '100%',
      height: '80vh',
      border: 'none',
      borderRadius: '12px',
      boxShadow: theme.shadow,
    },
    title: {
      fontSize: '2rem',
      fontWeight: 600,
      color: theme.color,
      marginBottom: '1rem',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: theme.color,
      marginBottom: '2rem',
      textAlign: 'center',
      lineHeight: 1.6,
    },
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/MatthewKompelResume2025.pdf';
    link.download = 'MatthewKompelResume2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div style={styles.resumeSection}>
        <div className="section-content-container">
          <Fade>
            <div
              ref={resumeRef}
              style={styles.resumeContainer}
            >
              <h2 style={styles.title}>Professional Resume</h2>
              <p style={styles.subtitle}>
                View my professional experience, skills, and qualifications.
                Feel free to download a copy for your records.
              </p>

              <button
                type="button"
                style={styles.downloadButton}
                onClick={handleDownload}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = theme.shadowHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = theme.shadow;
                }}
              >
                📄 Download Resume (PDF)
              </button>

              <iframe
                src="/images/MatthewKompelResume2025.pdf"
                style={styles.pdfContainer}
                title="Resume PDF"
              />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Resume;
