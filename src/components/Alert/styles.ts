import styled, { keyframes } from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  background: #fff;
  margin: 16px auto;
  padding: 16px;
  width: 100%;
  height: auto;
  z-index: 1;
  position: relative;
  border: 1px solid #f0f0f0;
  animation: ${appear} 2s;

  > h1 {
    color: #0669de;
    margin: 0 0 32px 0;
    font-size: 24px;
    padding: 0;
    line-height: 24px;
    text-align: center;
  }

  > div > img {
    width: 200px;
    height: 200px;
    display: block;
    margin: 0 auto 32px auto;
  }

  span {
    text-align: center;
    font-size: 12px;
    display: block;
    margin: 32px auto;
  }

  a.button {
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
  }

  @media screen and (min-width: 74em) {
    width: 500px;
  }
`;

export const Close = styled(FaTimes)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Profiles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: flex-start;

  > a {
    width: calc(20% - 0.4rem);

    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
      border: 2px solid #0669de;
    }
  }

  > img {
    width: calc(20% - 0.4rem);
    height: auto;
    border-radius: 50%;
    border: 2px solid #0669de;
  }

  .no-registered {
    border: 2px solid #ccc;
    filter: grayscale(1);
  }

  > button {
    width: calc(20% - 0.4rem);
    display: block;
    background: #eee;
    border: 2px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  > span {
    width: 100%;
    text-align: left;
    font-size: 12px !important;

    &:first-child {
      margin-bottom: 1rem;

      strong {
        color: #0b64da;
      }
    }

    &:last-child {
      color: #222;
      margin-top: 1rem;
    }
  }
`;
