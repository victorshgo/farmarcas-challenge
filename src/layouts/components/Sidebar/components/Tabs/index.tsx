import { FaUserFriends, FaListUl, FaAngleRight } from "react-icons/fa";

import { Wrapper, Items } from "./styles";

const Tabs = () => {
  return (
    <Wrapper>
      <Items active={true}>
        <span>
          <FaUserFriends />
          &nbsp; Usuários
        </span>
        <FaAngleRight />
      </Items>
      <Items>
        <span>
          <FaListUl />
          &nbsp; Perfis de acesso
        </span>
        <FaAngleRight />
      </Items>
    </Wrapper>
  );
};

export default Tabs;
