import { List, Item, Badge } from "./styles";

const Menu = () => {
  return (
    <List>
      <Item>
        <a href="/">Redes</a>
      </Item>
      <Item>
        <a href="/">Produtos</a>
        <Badge>2</Badge>
      </Item>
      <Item active={true}>
        <a href="/">Configurações</a>
      </Item>
    </List>
  );
};

export default Menu;
