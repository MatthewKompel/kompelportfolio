import React, { useState, useEffect, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import Fade from 'react-reveal/Fade';
import endpoints from '../constants/endpoints';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './FallbackSpinner';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const projectsGridRef = useScrollAnimation('fade-in', 0.3);

  const styles = {
    containerStyle: {
      marginBottom: 25,
      padding: '2rem 0',
    },
    showMoreStyle: {
      margin: 25,
    },
    projectsSection: {
      padding: '3rem 0',
      background: theme.background,
      minHeight: '100vh',
      transition: 'all 0.3s ease',
    },
    projectsGrid: {
      marginTop: '2rem',
    },
  };

  useEffect(() => {
    fetch(endpoints.projects, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  const numberOfItems = data ? data.length : 6;
  return (
    <>
      <div style={styles.projectsSection}>
        {data
          ? (
            <div className="section-content-container">
              <Container style={styles.containerStyle}>
                <div
                  ref={projectsGridRef}
                  style={styles.projectsGrid}
                >
                  <Row xs={1} sm={2} md={2} lg={3} className="g-4">
                    {data.projects?.slice(0, numberOfItems).map((project) => (
                      <Fade key={project.title} bottom duration={800}>
                        <ProjectCard project={project} />
                      </Fade>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
          ) : <FallbackSpinner /> }
      </div>
    </>
  );
};

export default Projects;
