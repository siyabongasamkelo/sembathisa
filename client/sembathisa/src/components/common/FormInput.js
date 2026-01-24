import styled from "styled-components";

export const FormInput = styled.input`
  height: 30px;
  width: 80%;
  margin-left: 10%;
  border: 1px solid #8ca9ff;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 12px;
  font-family: "Kantumruy Pro", sans-serif;
  padding-left: 20px;
`;
