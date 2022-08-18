import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { primaryImage } from "../../assets";
import { addPeriod } from "../../redux/contract/contractSlice";
import { useGetPeriodsQuery } from "../../services/api";
import { Loading } from "../Loading";
import {
  Container,
  ImgBox,
  Options,
  Card,
  CardContainer,
  Input,
  Img,
  Button,
  SimulateContainer,
} from "./styles";

const Periods = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetPeriodsQuery();

  if (isLoading) return <Loading />;

  const handlePeriod = (period?: number) => {
    if (period) {
      dispatch(addPeriod(period));
      navigate("/simulation");
    } else {
      alert("Selecione um valor");
    }
  };

  return (
    <Container>
      <Options>
        <h1>Em quanto tempo você quer pagar?</h1>
        <CardContainer>
          <Card onClick={() => handlePeriod(data?.suggestionInstallments[3])}>
            <h3>{`${data?.suggestionInstallments[3]} meses`}</h3>
          </Card>
          <Card onClick={() => handlePeriod(data?.suggestionInstallments[2])}>
            <h3>{`${data?.suggestionInstallments[2]} meses`}</h3>
          </Card>
          <Card onClick={() => handlePeriod(data?.suggestionInstallments[1])}>
            <h3>{`${data?.suggestionInstallments[1]} meses`}</h3>
          </Card>
          <Card onClick={() => handlePeriod(data?.suggestionInstallments[0])}>
            <h3>{`${data?.suggestionInstallments[0]} meses`}</h3>
          </Card>
        </CardContainer>
        <SimulateContainer>
          <Input>
            <input type="text" placeholder="00,00" />
            <h3>meses</h3>
          </Input>
          <Button>
            <button type="button">
              <h3>Continuar</h3>
            </button>
          </Button>
        </SimulateContainer>
      </Options>

      <ImgBox>
        <Img src={primaryImage} />
      </ImgBox>
    </Container>
  );
};

export default Periods;
