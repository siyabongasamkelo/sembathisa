import styled from "styled-components";

export const OurServicesLayout = styled.div`
  width: 80%;
  max-width: 1200px;

  margin-top: ${(props) => props.theme.spacing.xxl};
`;

export const OurServicesContent = styled.div``;

export const Benefits = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: ${(props) => props.theme.spacing.lg};
  @media (min-width: 1200px) {
  }
`;

export const TermsAndConditions = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.lg};
`;

export const LinedHeading = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  color: #666;
  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #ccc;
  }

  @media (min-width: 1200px) {
  }
`;

export const TermsAndConditionContent = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.lg};

  display: flex;
  justify-content: space-between;
`;

export const FeesAndPayment = styled.div`
  width: 50%;

  h3 {
    text-align: left;
  }

  p {
    text-align: left;
  }

  li {
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`;

export const ReadTermsAndConditions = styled.div`
  h3 {
    text-align: left;
  }

  button {
    margin-top: ${(props) => props.theme.spacing.md};
  }
`;
