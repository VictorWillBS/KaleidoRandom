import styled, { keyframes } from "styled-components";
import { parseColor } from "../../functions/parseColor";
import { Container, ContainerBox } from "../Content/content";

export function Episode({ title, position }) {
  const containerConfig = `
    width:100px;
    height: max-content;
    flex-direction:column;
  `;
  return (
    <Container config={containerConfig}>
      <ColorBlock color={parseColor(title)} time={position + 1}>
        {" "}
        <h3>{position + 1}</h3>{" "}
      </ColorBlock>
      <H3 time={position + 1}> {title}</H3>
    </Container>
  );
}

const coloredProgress = keyframes`
  0% {
    background-color:#B60000
  }

  12% {
    background-color:#FFC700
  }
  24% {
    background-color:#24B600
  }
  36% {
    background-color:#B556FF
  }
  48%{
    background-color:#2F37F5
  }
  60% {
    background-color:#DC6A00
  }
  72% {
    background-color:#E800B5
  }
  100%{
    background-color:#B60000
    }
`;

export const opacityProgress = keyframes`
  0%{
    opacity:0;
  }
  90%{
    opacity:0;
  }
  100%{
    opacity:100%
  }
`;
export const H3 = styled.h3`
  margin-top: 28px;
  font-family: "Inter", sans-serif;
  animation: ${opacityProgress} ${({ time }) => `2.${time * 1}8s` || "1s"}
    ease-out;
  font-size: 28px;
  font-weight: bold;
  color: white;
`;
const ColorBlock = styled(ContainerBox)`
  width: 100px;
  height: 100px;
  animation: ${coloredProgress} ${({ time }) => `2.${time}s`} ease-in;
  background-color: ${({ color }) => color};
  h3 {
    font-family: "Inter", sans-serif;
    animation: ${opacityProgress} ${({ time }) => `2.${time * 1}8s`} ease-out;
    font-size: 28px;
    font-weight: bold;
    color: #000;
  }
`;
