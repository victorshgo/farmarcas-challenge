import Menu from "./components/Menu";
import Username from "./components/Username";

import { Header as HeaderComponent } from "./styles";

const Header = () => {
  return (
    <HeaderComponent>
      <Menu />
      <Username />
    </HeaderComponent>
  );
};

export default Header;
