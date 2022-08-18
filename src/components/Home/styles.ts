import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.colors.background_default};
  animation-name: container;
  animation-duration: 1s;
  @keyframes container {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Options = styled.div`
  padding: 100px;
  @media (max-width: 768px) {
    padding: 0;
    h1 {
      margin: 30px 0 0 24px;
      font-size: ${({ theme }) => theme.metrics.font.main}px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin-top: 30px;
  gap: 40px;
  width: 100%;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
    padding: 5px;
    gap: 20px;
  }
`;

export const Card = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.background_disabled};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  gap: 10px;
  &.disabled {
    cursor: context-menu;
    img,
    h4 {
      opacity: 0.2;
    }
  }
  img {
    width: 50px;
  }
  p {
    color: ${({ theme }) => theme.colors.primary_main};
  }
  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
    img {
      width: 40px;
    }
    p {
      font-size: ${({ theme }) => theme.metrics.font.small}px;
    }
  }
`;

export const ImgBox = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 90%;
  @media (max-width: 768px) {
    display: none;
  }
`;
