import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  padding: 1rem;
  align-items: center;
  background: #f8f8f8;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    *background: rgba(0, 0, 0, 0.9);
  }
`;
