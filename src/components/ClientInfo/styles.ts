import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.color_black};
  
  img {
    width: 30px;
    height: 30px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background: ${({ theme }) => theme.colors.color_black};
  border-radius: 0 0 500px 0;
  h3 {
    color: ${({ theme }) => theme.colors.color_white};
    margin-top: 10px;
  }
  h4 {
    color: ${({ theme }) => theme.colors.color_white};
    font-weight: 200;
  }
  h2 {
    font-size: ${({ theme }) => theme.metrics.font.secondary}px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary_main};
  }
  @media (max-width: 768px) {
    border-radius: 0 0 40px 0;
  }
`;
