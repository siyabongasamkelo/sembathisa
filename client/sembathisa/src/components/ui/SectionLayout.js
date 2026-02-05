import styled from "styled-components";

export const MobileLayout = styled.div`
  width: 80%;
  margin-top: ${(props) => props.theme.spacing.xl};

  @media only screen and (min-width: 768px) {
    /* width: 65%; */
    margin-top: ${(props) => props.theme.spacing.xxxxl};
  }
`;
