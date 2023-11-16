import styled from 'styled-components';

export const ModalContainer = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  overflow: hidden;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
