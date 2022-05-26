import { FaAngleDown } from "react-icons/fa";

import { Username as UsernameComponent } from "./styles";

const Username = () => {
  return (
    <UsernameComponent>
      <span>João Dasneves</span>
      <FaAngleDown />
    </UsernameComponent>
  );
};

export default Username;
