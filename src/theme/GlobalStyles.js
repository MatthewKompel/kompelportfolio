import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
  
  * {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: all 0.3s ease;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  
  /* Smooth scroll animations for elements */
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .slide-in-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .slide-in-left.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  .slide-in-right {
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .slide-in-right.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  .scale-in {
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .scale-in.visible {
    opacity: 1;
    transform: scale(1);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    margin: 0 0 1rem 0;
  }
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 600;
  }
  
  h3 {
    font-size: 1.8rem;
    font-weight: 500;
  }
  
  p {
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
    line-height: 1.7;
  }
  
  a {
    color: ${({ theme }) => theme.accentColor};
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.secondaryAccent};
    }
  }
  
  button {
    font-family: 'Inter', sans-serif;
    transition: all 0.3s ease;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyles;
