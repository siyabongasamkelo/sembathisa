import styled from "styled-components";

export const Accordion = styled.details`
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
`;

export const Question = styled.summary`
  list-style: none;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::-webkit-details-marker {
    display: none;
  }
`;

export const Icon = styled.span`
  font-size: 1.5rem;
  transition: transform 0.2s ease;

  ${Accordion}[open] & {
    transform: rotate(45deg); /* + becomes x / − */
  }
`;

export const Answer = styled.p`
  margin-top: 0.75rem;
  color: #6b7280;
  line-height: 1.6;
`;

function FAQItem({ question, answer }) {
  return (
    <Accordion>
      <Question>
        {question}
        <Icon>+</Icon>
      </Question>
      <Answer>{answer}</Answer>
    </Accordion>
  );
}

export default FAQItem;
