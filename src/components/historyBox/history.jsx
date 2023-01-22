import styled from "styled-components";
import { parseColor } from "../../functions/parseColor";
import { Container, ContainerBox } from "../Content/content";

export function History({
  historyLength,
  historyEpList,
  index,
  setHistoryEpList,
}) {
  const containerConfig = `
    width:100px;
    height: max-content;
    flex-direction:column;
  `;
  const position = () => {
    if (index + 1 === historyLength) {
      return "atual";
    }
    return index + 1;
  };

  const newHistoryEpList = () => {
    setHistoryEpList(historyEpList);
  };
  return (
    <Container config={containerConfig}>
      <ColorBlock
        onClick={newHistoryEpList}
        color={parseColor(historyEpList[0])}
      >
        <p>{position()}</p>
      </ColorBlock>
    </Container>
  );
}

const ColorBlock = styled(ContainerBox)`
  width: 100px;
  height: 20px;
  cursor: pointer;
  background-color: ${({ color }) => color};
  border-radius: 0 10px 10px 0;
  :hover {
    filter: brightness(1.1);
  }
  :active {
    filter: brightness(1.5);
  }
  p {
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: ${({ color }) => (color === "#FFF" ? "#000" : "#FFF")};
  }
`;
