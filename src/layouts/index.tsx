import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { LayoutProps } from "./types";

import { Container, Content, Main } from "./styles";

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <Main>{children}</Main>
      </Content>
    </Container>
  );
};

export default Layout;
