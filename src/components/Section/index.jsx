import { SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </>
  );
};

export default Section;
