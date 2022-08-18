import { AiOutlineBell } from "react-icons/ai";
import { logo } from "../../assets";
import { useTheme } from "styled-components";
import { MobileView } from 'react-device-detect';
import { Container, SubContainer } from "./styles";

const Clientinfo = () => {
  const theme = useTheme();

  return (
    <>
      <MobileView>
        <Container>
          <img src={logo} alt="" />
          <AiOutlineBell  size={32} color={theme.colors.background_default} />
        </Container>
      </MobileView>
      <SubContainer>

        <h3>Olá, Guilherme Queiroz</h3>
        <h4>Seu crédito disponivel é de</h4>
        <h2>R$ 5.048,10</h2>
      </SubContainer>
    </>
  );
};

export default Clientinfo;
