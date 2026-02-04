import styled from "styled-components";

export const ContactDetails = styled.div``;

export const IconAndText = styled.div`
  display: flex;

  p {
    margin-left: 20px;
    text-align: left;
  }
`;

export const FormMobile = styled.form`
  border: 1px solid #8ca9ff;
  border-radius: 10px;
  margin-top: ${(props) => props.theme.spacing.lg};

  label {
    margin-top: ${(props) => props.theme.spacing.lg};
    margin-left: 10%;
  }
  input {
    margin-top: ${(props) => props.theme.spacing.sm};
  }
  textarea {
    margin-top: ${(props) => props.theme.spacing.sm};
  }

  button {
    width: 80%;
    margin-left: 10%;
    border-radius: 10px;
    margin-top: ${(props) => props.theme.spacing.lg};
    margin-bottom: ${(props) => props.theme.spacing.lg};
  }
`;
