import styled from "styled-components";

export const FAQMobileContent = styled.div`
  .purple {
    color: ${(props) => props.theme.colors.primary};
    margin-top: ${(props) => props.theme.spacing.xl};
  }

  button {
    margin-top: ${(props) => props.theme.spacing.lg};
  }
`;
