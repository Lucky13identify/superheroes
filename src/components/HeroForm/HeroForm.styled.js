import styled from '@emotion/styled';

export const MainHead = styled.h1`
  margin-left: 20px;
`;

export const Form = styled.form`
  display: flex;

  margin-top: 20px;
  padding: 20px;
  max-width: 420px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
  border: 3px solid #2196f3;
  border-radius: 7px;
  background-image: linear-gradient(
    to right,
    rgba(148, 0, 211, 0.6),
    rgba(148, 0, 211, 0.6)
  );
`;

export const Input = styled.input`
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
  width: 400px;
  padding: 10px;
`;

export const Label = styled.label`
  color: white;
`;

export const Textarea = styled.textarea`
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
  width: 400px;
  height: 80px;
  padding: 10px;
  resize: none;
`;

export const Button = styled.button`
  display: inline-block;
  align-items: center;
  padding: 10px 24px;
  margin-top: 15px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fff;
  background: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  :focus,
  :hover {
    background-color: DeepSkyBlue;
  }
  width: 150px;
`;
