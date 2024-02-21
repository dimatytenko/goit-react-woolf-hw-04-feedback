import { FeedbackBox, FeedbackButton } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBox>
      {options.map(option => {
        return (
          <FeedbackButton
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButton>
        );
      })}
    </FeedbackBox>
  );
};
export default FeedbackOptions;
