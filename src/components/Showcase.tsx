import React from 'react';
import styled from 'styled-components';
import burgerThumb from '@/images/burger.gif';
import employeeManager from '@/images/employeeManager.gif';
import employeeDirectory from '@/images/employeeDirectory.gif';
import moveme from '@/images/moveme.png';
import streaker from '@/images/streaker.png';
import weatherApp from '@/images/weatherapp.png';

const accentColor = '#c5acf1';
const accentDark = '#9a76c3';
const lightGrey = '#ebebeb';
const accentLight = '#f3effd';

const Section = styled.section`
  padding: 40px;
  color: #333; /* Default text color for light mode */
  background-color: var(--background-color);
  
  @media (prefers-color-scheme: dark) {
    color: #fff; /* Light text color for dark mode */
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  max-width: 1024px; // Maximum width of the grid
  margin: 0 auto; // Center the grid
`;

const ProjectCard = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); // Increase offsetY, blurRadius, and color opacity
  transition: box-shadow 0.3s ease-in-out;
  
  &:hover {
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3); // Increase offsetY, blurRadius, and color opacity on hover
  }

  @media (prefers-color-scheme: dark) {
    background-color: #2b2b2b;
  }
`;

const TitleContainer = styled.div`
  max-width: 1024px; // Match the max-width of GridContainer
  margin: 0 auto; // Center the title container
  text-align: left; // Left-align the title text
`;

const Title = styled.h2`
  color: ${accentColor};
  font-size: 2.5em;
  margin-bottom: 0px;
  padding-left: 1%; // Add some left padding to position slightly inside the grid
  font-weight: 300; // Thin font weight
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  max-height: 180px;
  border-radius: 4px;
  object-fit: contain;
`;

const ProjectTitle = styled.h3`
  color: ${accentLight};
  font-weight: 500;
  font-size: 18px;
`;

const GitHubLink = styled.a`
  display: inline-block;
  margin-top: 8px;
  color: ${accentDark}; // Style the link with the dark accent color
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: ${accentLight}; // Change color to light accent color on hover
  }
`;

const Disclaimer = styled.p`
  color: ${accentDark}; // Use the dark accent color for the text
  font-size: 0.80em; // Slightly smaller than the Title font size
  margin-bottom: 40px; // Space between the disclaimer and the project grid
  padding-left: 1%; // Add some left padding to position slightly inside the grid
`;

const GitHubLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
        <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.214.682-.475 0-.233-.008-.853-.013-1.675-2.782.599-3.369-1.333-3.369-1.333-.454-1.146-1.11-1.451-1.11-1.451-.908-.617.069-.605.069-.605 1.004.07 1.532 1.025 1.532 1.025.891 1.52 2.341 1.082 2.913.827.091-.641.349-1.081.635-1.33-2.221-.25-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.104-.25-.447-1.265.097-2.636 0 0 .84-.268 2.75 1.025a9.578 9.578 0 015 0c1.909-1.293 2.747-1.025 2.747-1.025.546 1.371.203 2.386.1 2.636.64.698 1.027 1.59 1.027 2.682 0 3.842-2.336 4.688-4.564 4.935.359.307.678.916.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .266.18.568.688.471A10.014 10.014 0 0022 12c0-5.523-4.477-10-10-10z"></path>
  </svg>
);

const ProjectDescription = styled.p`
  margin: 10px 0;
`;

// Placeholder project data
const projects = [
    {
        title: 'The Burger Place',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        thumbnail: burgerThumb.src,
        githubLink: 'https://github.com/scottsharris-az/burger-handlebars',
    },
    {
        title: 'Employee Manager',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
        thumbnail: employeeManager.src,
        githubLink: 'https://github.com/scottsharris-az/employee-tracker',
    },
    {
        title: 'Employee Directory',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        thumbnail: employeeDirectory.src,
        githubLink: 'https://github.com/scottsharris-az/react-employee-directory',
    },
    {
        title: 'Streaker',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
        thumbnail: streaker.src,
        githubLink: 'https://scottsharris-az.github.io/img/streaker.png',
    },
    {
        title: 'Weather Dashboard',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        thumbnail: weatherApp.src,
        githubLink: 'https://scottsharris-az.github.io/img/weatherapp.png',
    },
    {
        title: 'Move Me',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
        thumbnail: moveme.src,
        githubLink: 'https://github.com/Dayman628/move-me',
    },

];

const Showcase: React.FC = () => {
  return (
    <Section>
      <TitleContainer>
        <Title>Showcase</Title>
        <Disclaimer>*** The projects listed here are older projects from my education and I am working on updating this section with up to date projects that showcase my skills and experience. ***</Disclaimer>
      </TitleContainer>
      <GridContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <Thumbnail src={project.thumbnail} alt={project.title} />
            <GitHubLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <GitHubLogo />
            </GitHubLink>
          </ProjectCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Showcase;
