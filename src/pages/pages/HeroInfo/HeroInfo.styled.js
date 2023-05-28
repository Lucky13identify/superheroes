import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 10px;
`;

export const Text = styled.section`
  padding: 20px;
  border: 3px solid #2196f3;
  border-radius: 7px;
  color: white;
  background-image: linear-gradient(
    to right,
    rgba(148, 0, 211, 0.6),
    rgba(148, 0, 211, 0.6)
  );
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ImgList = styled.img`
  width: 50%;
  object-fit: cover;
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
