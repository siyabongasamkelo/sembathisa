import styled from "styled-components";

export const JoinNowLayout = styled.div`
  width: 80%;
  max-width: 1200px;

  margin-top: ${(props) => props.theme.spacing.xxl};
`;

export const JoinNowContent = styled.div``;

export const JoinCommunity = styled.div`
  width: 100%;
  display: flex;
`;

export const JoinCommunityImage = styled.div`
  img {
    height: 200px;
  }
`;

export const JoinCommunityText = styled.div`
  h3 {
    text-align: left;
    margin-left: 30px;
  }

  @media (min-width: 1200px) {
    margin-left: ${(props) => props.theme.spacing.md};
  }
`;

export const JoinCommunityParagraph = styled.div`
  width: 65%;
  margin-left: 30px;
  margin-top: ${(props) => props.theme.spacing.lg};

  p {
    text-align: left;
  }
`;

export const JoinNowButton = styled.div`
  width: 100%;
  background-color: black;

  margin-top: ${(props) => props.theme.spacing.xl};
  display: flex;
  justify-content: space-between;
`;

export const JoinNowButtonParagraph = styled.div`
  width: 30%;
  margin-left: 30px;
  p {
    padding-top: ${(props) => props.theme.spacing.xl};
    text-align: left;
    color: ${(props) => props.theme.colors.buttonText};
  }
  button {
    margin-top: ${(props) => props.theme.spacing.md};
  }

  @media (min-width: 1200px) {
    margin-left: ${(props) => props.theme.spacing.xl};
  }
`;

export const JoinNowButtonImage = styled.div`
  img {
    width: 250px;
    margin-top: ${(props) => props.theme.spacing.xl};
    margin-right: 60px;
    margin-bottom: ${(props) => props.theme.spacing.xl};
  }
`;
