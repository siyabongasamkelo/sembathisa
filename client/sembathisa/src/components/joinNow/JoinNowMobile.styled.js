import styled from "styled-components";

export const JoinCommunityBlackSection = styled.div`
  width: 100%;

  p {
    color: ${(props) => props.theme.colors.buttonText};
  }
`;

export const JoinCommunityMedia = styled.div`
  margin-top: ${(props) => props.theme.spacing.xxl};

  img {
    width: 100%;
  }
`;
