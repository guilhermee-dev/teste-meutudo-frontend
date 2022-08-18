import { Container, Content } from "./styles";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
