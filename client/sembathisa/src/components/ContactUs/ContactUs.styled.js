import styled from "styled-components";

export const ContactUsLayout = styled.div`
  width: 80%;
  max-width: 1200px;

  margin-top: ${(props) => props.theme.spacing.xxl};
`;

export const ContactUsContent = styled.div`
  margin-top: ${(props) => props.theme.spacing.xl};
`;

export const ContactDetails = styled.div``;

export const ContactDetailsContent = styled.div`
  width: 40%;
  display: flex;

  p {
    padding-left: 30px;
    text-align: left;
  }
`;

export const ContactForm = styled.form`
  border: 1px solid #8ca9ff;
  width: 60%;
  border-radius: 10px;
  margin-top: ${(props) => props.theme.spacing.lg};

  label {
    margin-left: 10%;
    margin-top: ${(props) => props.theme.spacing.lg};
  }

  input {
    margin-top: ${(props) => props.theme.spacing.md};
  }

  textarea {
    margin-top: ${(props) => props.theme.spacing.md};
  }

  button {
    height: 40px;
    width: 140px;
    margin-left: 10%;
    margin-top: ${(props) => props.theme.spacing.md};
    margin-bottom: ${(props) => props.theme.spacing.xl};
  }
`;
