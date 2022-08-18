import styled from "styled-components";

export const Header = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.color_black};
  @media (max-width: 768px) {
    width: 100%;
    box-shadow: none;
    .iconNav {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  max-width: 100px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    display: flex;
    margin: 0 10px;
  }
  li {
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: 20px;
    p {
      margin-left: 5px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.color_white};
    }
    .icon {
      color: white;
    }
  }
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.color_white};
    a {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    li {
      width: 100%;
      margin-left: 0;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      p {
        color: ${({ theme }) => theme.colors.color_black};
        font-size: ${({ theme }) => theme.metrics.font.smaller}px;
        margin-bottom: 10px;
      }
      .icon {
        font-weight: bold;
        margin-left: 5px;
        color: ${({ theme }) => theme.colors.color_black};
      }
    }
  }
`;
