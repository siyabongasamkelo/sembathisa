import styled from "styled-components";

export const OurServicesLayout = styled.div`
  width: 80%;
  height: auto;
  max-width: 1200px;

  margin-top: 60px;
`;

export const OurServicesContent = styled.div``;

export const Benefits = styled.div`
  height: 250px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-top: -43px;

  @media (min-width: 1200px) {
    margin-top: 0;
  }
`;

export const TermsAndConditions = styled.div`
  height: 250px;
  width: 100%;
`;

export const LinedHeading = styled.div`
  width: 100%;
  margin-top: -53px;

  display: flex;
  align-items: center;
  gap: 12px;
  color: #666;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #ccc;
  }

  @media (min-width: 1200px) {
    margin-top: 0;
  }
`;

export const TermsAndConditionContent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 24px;

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
    padding-top: 8px;
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
    margin-top: 4px;
  }
`;
