import styled from 'styled-components';

export const FeedbackBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const FeedbackButton = styled.button`
  padding: 10px 20px;
  border: none;
  outline: none;
  background-color: ${props => props.theme.backgrounds.buttonPrimary};
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;

  &:hover {
    opacity: 0.7;
  }
`;
