import styled from "styled-components";
import { H3, opacityProgress } from "../Episodes/episode";

export function RandomizeButton({ setUpdate, update }) {
  const refreshList = () => {
    setUpdate(!update);
  };
  return (
    <Button onClick={refreshList}>
      <ButtonText>Nova Ordem Aleatória</ButtonText>
    </Button>
  );
}

const Button = styled.button`
  margin: 40px 0;
  max-width: 320px;
  width: 100%;
  height: 75px;
  border: none;
  border-radius: 15px;
  background-color: #0b7a2a;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :active {
    filter: brightness(1.1);
  }
`;
const ButtonText = styled(H3)`
  font-size: 20px;
  margin-top: 0;
`;
