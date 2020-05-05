import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.header`
  background: #0669de;
  margin-bottom: 1rem;
  animation: ${slide} 0.25s;

  img {
    height: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  height: 80px;

  @media screen and (min-width: 74em) {
    width: 1100px;
    padding: 1rem 0;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0;
`;

export const Profile = styled.button`
  background: transparent;
  border: 0;

  img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    border: 2px solid #fff;
    display: block;
  }
`;
