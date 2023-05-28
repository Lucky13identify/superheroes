import styled from '@emotion/styled';

export const ModalWindow = styled.div`
  position: absolute;
  padding: 10px;
  top: 5%;
  left: 30%;
  width: 468px;
  height: 700px;
  border-radius: 4px;
  background-image: linear-gradient(
    to right,
    rgba(148, 0, 211, 0.4),
    rgba(148, 0, 211, 0.4)
  );
  overflow-y: scroll;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`;
