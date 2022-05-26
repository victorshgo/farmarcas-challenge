import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
    margin-right: 10px;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 66px;
  height: 25px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 25px;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  ::before {
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

export const Input = styled.input`
  :checked + .slider {
    background-color: var(--color-primary);
  }

  :focus + .slider {
    box-shadow: 0 0 1px var(--color-primary);
  }

  :checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
