import styled from "styled-components";
import { SmallMediumText, SmallText } from "../ui/typography/Text";

export const HeaderAndText = styled.div`
  width: 30%;
`;

export const Header = styled.div`
  width: 100%;
  h3 {
    text-align: left;
  }
`;

export const Paragraph = styled.div`
  margin-top: ${(props) => props.theme.spacing.lg};

  p {
    text-align: left;
  }
`;

const TextBlocks = ({ header, paragraph }) => {
  return (
    <>
      <HeaderAndText>
        <Header>
          <SmallMediumText>{header}</SmallMediumText>
        </Header>

        <Paragraph>
          <SmallText>{paragraph}</SmallText>
        </Paragraph>
      </HeaderAndText>
    </>
  );
};

export default TextBlocks;
