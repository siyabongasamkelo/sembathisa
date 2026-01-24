import styled from "styled-components";
import { SmallMediumText, SmallText } from "../ui/typography/Text";

export const HeaderAndText = styled.div`
  width: 30%;
  margin-top: 19px;
`;

export const Header = styled.div`
  width: 60%;
  h3 {
    text-align: left;
  }
`;

export const Paragraph = styled.div`
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
