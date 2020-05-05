import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  padding: 1rem;
  align-items: center;
`;

export const Form = styled.div`
  background: #fff;
  margin: 16px auto;
  padding: 16px;
  width: 100%;
  height: auto;
  border: 1px solid #f0f0f0;
  animation: ${appear} 2s;

  img {
    width: 200px;
    height: 200px;
    display: block;
    margin: 0 auto 32px auto;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 12px;
    margin-bottom: 1rem;
    background: #f8f8f8;
    display: flex;
    height: 40px;
    align-items: center;
    border: 0;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    border: 1px solid #f0f0f0;
  }

  a {
    display: flex;
    height: 40px;
    background: #0669de;
    color: #fff;
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 4px;
    text-decoration: none;
    align-items: center;
    justify-content: center;

    & + a {
      margin-top: 16px;
    }
  }

  @media screen and (min-width: 74em) {
    width: 500px;
  }
`;
