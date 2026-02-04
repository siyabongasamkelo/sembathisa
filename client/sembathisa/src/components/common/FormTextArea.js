import styled from "styled-components";

export const FormTextArea = styled.textarea`
  height: 120px;
  width: 80%;
  margin-left: 10%;
  border: 1px solid #8ca9ff;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.textSecondary};
  padding-left: 20px;
  padding-top: 10px;
  font-size: 12px;
  font-family: "Kantumruy Pro", sans-serif;

  @media only screen and (min-width: 240px) {
    height: 180px;
    font-size: 14px;
  }
`;
