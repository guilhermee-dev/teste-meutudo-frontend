import { useNavigate } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

import { Container } from "./styles";

type PropType = {
  name: string;
};

const HeaderTitle = ({ name }: PropType) => {
  const navigate = useNavigate();
  return (
    <Container>
      <AiOutlineLeft
        color="white"
        size={32}
        className="icon"
        onClick={() => navigate(-1)}
      />
      <h2>{name}</h2>
    </Container>
  );
};

export default HeaderTitle;
