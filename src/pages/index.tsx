import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import AboutMe from '@/components/AboutMe';
import Showcase from '@/components/Showcase';
import Contact from '@/components/Contact';
import Navbar from '@/components/NavBar';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;


const HomePage: React.FC = () => {
  const [isFading, setIsFading] = useState(false); // State to control fading
  const contactRef = useRef<HTMLDivElement>(null); // Ref to observe Contact section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set state to true if the Contact section is intersecting with the viewport
          setIsFading(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the Contact section is visible
      }
    );

    // Observe the Contact section
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    // Cleanup the observer
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <PageContainer>
        <AboutMe />
        <Showcase />
        <div ref={contactRef}>
          <Contact />
        </div>
      </PageContainer>
    </div>
  );
};

export default HomePage;