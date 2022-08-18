import {
  AiOutlineBell,
  AiOutlineCopy,
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiOutlineHome,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

import { logoComplet } from "../../assets";
import { Header, Logo, Nav } from "./styles";

const NavBar = () => {
  const theme = useTheme();
  return (
    <Header>
      <Logo src={logoComplet} />
      <Nav>
        <li>
          <Link to="/">
            <AiOutlineHome className="icon" size={22} color={theme.colors.primary_main} />
            <p style={{color: theme.colors.primary_main}}>Inicio</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineCopy className="icon" size={22} />
            <p>Contratos</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineQuestionCircle className="icon" size={22} />
            <p>Dúvidas</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineUser className="icon" size={22} />
            <p>Conta</p>
          </Link>
        </li>
      </Nav>
      <AiOutlineBell size={32} color="#fff" className="iconNav" />
    </Header>
  );
};

export default NavBar;
