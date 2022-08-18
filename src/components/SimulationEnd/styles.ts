import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.colors.background_default};
`;

export const Options = styled.div`
  padding: 100px;
  @media (max-width: 768px) {
    padding: 10px;
    h1 {
      margin: 30px 0 0 10px;
      font-size: ${({ theme }) => theme.metrics.font.small}px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  width: 100%;
  margin-top: 30px;
`;

export const Card = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.background_disabled};
  border-left: 10px solid ${({ theme }) => theme.colors.primary_main};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
  h3 {
    font-weight: 500;
  }
`;

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 80px;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 10px;
    margin-right: 20px;
  }
`;

export const ImgBox = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Desc = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.color_black};
  padding-right: 10px;
  h3 {
    margin: 5px 0;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary_main};
  }
  h5 {
    font-weight: 400;
  }
`;

export const Tax = styled.div`
  margin-left: 15px;
`;

export const BottomCard = styled.div`
  margin-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.color_black};
  .icon {
    vertical-align: middle;
  }
  p {
    margin-top: 15px;
  }
`;

export const Confirm = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  h4 {
    display: flex;
    align-items: center;
    margin: 0 5px 0 72%;
    color: ${({ theme }) => theme.colors.primary_main};
  }
`;

export const Img = styled.img`
  width: 90%;
`;
