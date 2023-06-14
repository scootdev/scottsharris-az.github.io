import React, { useState } from 'react';
import styled from 'styled-components';

const accentColor = '#c5acf1';
const accentDark = '#9a76c3';
const lightGrey = '#ebebeb';
const accentLight = '#f3effd';

const Section = styled.section`
  padding: 10px 40px;
  color: #333;
  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
`;

const Segment = styled.div`
  margin-bottom: 30px;
  padding: 20px;
`;

const Paragraph = styled.p`
  line-height: 1.8;
  color: ${lightGrey};
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto 30px;
`;

interface ProfileOverlayProps {
  hovered: boolean;
}

const ProfileOverlay = styled.div<ProfileOverlayProps>`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.hovered ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  color: ${accentLight};
`;

const NameText = styled.div`
  position: absolute;
  left: 10px;
  font-size: 12em;
  font-weight: bold;
  line-height: 0.7;
  white-space: nowrap;
  text-align: left;
  padding-right: 10px;
  color: ${accentDark};
  z-index: -1;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid ${accentColor};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: border-color 0.3s ease-in-out; // Add transition for smooth effect
`;

const LinkedInContainer = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${accentColor};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const LinkedInLogo = styled.svg`
  color: black;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 10%;
  background-color: ${accentColor};
  transition: background-color 0.3s ease-in-out;
`;

const GitHubContainer = styled(LinkedInContainer)`
  transform: translate(220%, 75%);
  left: 35%;
  bottom: 15%;
`;

const DocumentContainer = styled(LinkedInContainer)`
  transform: translate(-320%, 75%);
  left: 65%;
  bottom: 15%;
`;

const GitHubLogo = styled.svg`
  color: black;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0%;
  background-color: ${accentColor};
  transition: background-color 0.3s ease-in-out; // Add transition for smooth effect
`;

const DocumentLogo = styled.svg`
  color: black;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 10%;
  background-color: ${accentColor};
  transition: background-color 0.3s ease-in-out; // Add transition for smooth effect
`;

const StyledLink = styled.a`
  &:hover ${ProfileImage} {
    border-color: ${accentLight}; // Change border color on hover
  }
  &:hover ${LinkedInLogo}, &:hover ${DocumentLogo}, &:hover ${GitHubLogo} {
    background-color: ${accentLight}; // Change background color on hover
  }
`;

const AboutMe: React.FC = () => {
  const [hoveredLogo, setHoveredLogo] = useState('');

  return (
    <Section>
      <ProfileContainer>
        <NameText>
          SCOTT<br />
          HARRIS
        </NameText>
        <ProfileOverlay hovered={hoveredLogo !== ''}>{hoveredLogo}</ProfileOverlay>
        <ProfileImage src="https://media.licdn.com/dms/image/D4D03AQEq5ZPzXvZaLQ/profile-displayphoto-shrink_800_800/0/1681944107619?e=1688601600&v=beta&t=4xg2_4hwmxxnJF-IG7zQ8T7bNYpGZFhBqz7ZRAHgVys" alt="Profile Photo" />
        <StyledLink
          href="https://www.linkedin.com/in/scottharris-az/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLogo('-- LinkedIn --')}
          onMouseLeave={() => setHoveredLogo('')}
        >
          <LinkedInContainer>
            <LinkedInLogo viewBox="0 0 32 32">
              <path fill="currentColor" d="M12.9 11.7h4.8v2.5h.1c.7-1.3 2.3-2.8 4.8-2.8 5.1 0 6 3.3 6 7.7v8.8h-4.8v-7.8c0-1.8 0-4.3-2.7-4.3s-3.1 2-3.1 4.2v7.8h-4.9v-16z"></path>
              <path fill="currentColor" d="M5 12h5v16h-5z"></path>
              <circle cx="8" cy="7" r="3" fill="currentColor"></circle>
            </LinkedInLogo>
          </LinkedInContainer>
        </StyledLink>
        <StyledLink
          href="https://github.com/scottharris-az"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLogo('-- GitHub -- ')}
          onMouseLeave={() => setHoveredLogo('')}
        >
          <GitHubContainer>
            <GitHubLogo viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.214.682-.475 0-.233-.008-.853-.013-1.675-2.782.599-3.369-1.333-3.369-1.333-.454-1.146-1.11-1.451-1.11-1.451-.908-.617.069-.605.069-.605 1.004.07 1.532 1.025 1.532 1.025.891 1.52 2.341 1.082 2.913.827.091-.641.349-1.081.635-1.33-2.221-.25-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.104-.25-.447-1.265.097-2.636 0 0 .84-.268 2.75 1.025a9.578 9.578 0 015 0c1.909-1.293 2.747-1.025 2.747-1.025.546 1.371.203 2.386.1 2.636.64.698 1.027 1.59 1.027 2.682 0 3.842-2.336 4.688-4.564 4.935.359.307.678.916.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .266.18.568.688.471A10.014 10.014 0 0022 12c0-5.523-4.477-10-10-10z"></path>
            </GitHubLogo>
          </GitHubContainer>
        </StyledLink>
        <StyledLink
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLogo('-- Resume --')}
          onMouseLeave={() => setHoveredLogo('')}
        >
          <DocumentContainer>
            <DocumentLogo viewBox="0 0 24 24">
              <path fill="currentColor" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"></path>
              <path fill="white" d="M14 2V8H20L14 2Z"></path>
              <path fill="white" d="M9 12H15V13H9V12Z"></path>
              <path fill="white" d="M9 15H15V16H9V15Z"></path>
              <path fill="white" d="M9 18H15V19H9V18Z"></path>
            </DocumentLogo>
          </DocumentContainer>
        </StyledLink>
      </ProfileContainer>
      <Segment>
        <Paragraph>
          A highly skilled full-stack web developer passionate about creating exceptional web experiences. With a certificate in full stack development from the University of Arizona, I possess expertise in HTML, CSS, and Javascript for both front-end and back-end development. Additionally, I bring proficiency in Python, PHP, and Node.js, enabling me to tackle diverse projects and leverage cutting-edge technologies.
        </Paragraph>
        <br />
        <Paragraph>
          My experience extends to creating projects that incorporate AI and automation, harnessing advanced technologies for improved efficiency and innovation. By staying up-to-date with industry trends and emerging tools, I deliver forward-thinking solutions tailored to meet every need.</Paragraph>
        <br />
        <Paragraph>
          Driven by a commitment to continuous growth, I actively seek out new challenges and engage in personal projects that push the boundaries of my capabilities. With unwavering determination and a problem-solving mindset, I consistently exceed expectations and deliver results that drive success.
        </Paragraph>
        <br />
        <Paragraph>
          If you&apos;re searching for a versatile and dedicated developer to elevate your digital presence, I am here to help. Let&apos;s embark on an exciting journey towards achieving web development excellence. Reach out to discuss how I can contribute to your success.        </Paragraph>
      </Segment>
    </Section>
  );
};

export default AboutMe;
