import styled from "styled-components";

export const ContactUsLayout = styled.div`
  width: 80%;
  height: auto;
  max-width: 1200px;

  margin-top: 60px;
`;

export const ContactUsContent = styled.div``;

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

  label {
    margin-left: 10%;
    margin-top: 20px;
  }

  input {
    margin-top: 5px;
  }

  button {
    height: 20px;
    width: 100px;
    margin-left: 10%;
    margin-top: 20px;
  }
`;
