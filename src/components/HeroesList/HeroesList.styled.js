import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 60px;
`;

export const ContainerUl = styled.ul`
  display: flex;
  gap: 80px;
`;

export const PaginationStyle = styled.li`
  color: white;
`;

export const Thumb = styled.div`
  height: 200px;
  margin-bottom: 10px;
`;

export const ImgList = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ListContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  padding: 10px;
  background-image: linear-gradient(
    to right,
    rgba(148, 0, 211, 0.2),
    rgba(148, 0, 211, 0.2)
  );
  border: 3px solid darkorchid;
  border-radius: 7px;
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
  width: 100px;
`;
