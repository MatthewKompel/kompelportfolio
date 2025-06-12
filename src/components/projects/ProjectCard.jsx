import React from 'react';
import {
  Button, Card, Badge, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';

const styles = {
  badgeStyle: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
    margin: 4,
    borderRadius: 20,
    fontSize: '0.875rem',
    fontWeight: 500,
    background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%)',
    color: '#4a5568',
    border: 'none',
    transition: 'all 0.3s ease',
  },
  cardStyle: {
    borderRadius: 16,
    border: 'none',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    background: 'white',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitleStyle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#2d3748',
    marginBottom: '1rem',
    lineHeight: 1.3,
  },
  cardTextStyle: {
    textAlign: 'left',
    color: '#4a5568',
    lineHeight: 1.6,
    fontSize: '1rem',
    flex: 1,
  },
  linkStyle: {
    textDecoration: 'none',
    padding: 10,
  },
  buttonStyle: {
    margin: 4,
    borderRadius: 8,
    fontWeight: 500,
    padding: '0.5rem 1.5rem',
    transition: 'all 0.3s ease',
    border: 'none',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
  },
  cardFooterStyle: {
    backgroundColor: '#f7fafc',
    borderTop: '1px solid #e2e8f0',
    padding: '1rem 1.5rem',
    marginTop: 'auto',
  },
  cardImgStyle: {
    transition: 'all 0.3s ease',
    height: '200px',
    objectFit: 'cover',
  },
  cardBodyStyle: {
    padding: '1.5rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  buttonContainerStyle: {
    marginTop: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
};

const ProjectCard = (props) => {
  // const theme = useContext(ThemeContext);
  const parseBodyText = (text) => <ReactMarkdown children={text} />;

  const { project } = props;

  return (
    <Col>
      <Card
        style={styles.cardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        }}
      >
        <Card.Img
          variant="top"
          src={project?.image}
          style={styles.cardImgStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <Card.Body style={styles.cardBodyStyle}>
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle}>
            {parseBodyText(project.bodyText)}
          </Card.Text>

          {project?.links && (
            <div style={styles.buttonContainerStyle}>
              {project.links.map((link) => (
                <Button
                  key={link.href}
                  style={styles.buttonStyle}
                  onClick={() => window.open(link.href, '_blank')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {link.text}
                </Button>
              ))}
            </div>
          )}
        </Card.Body>

        {project.tags && (
          <Card.Footer style={styles.cardFooterStyle}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                style={styles.badgeStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%)';
                  e.currentTarget.style.color = '#4a5568';
                }}
              >
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
