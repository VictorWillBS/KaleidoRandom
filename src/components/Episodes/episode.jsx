import styled from "styled-components";
import { parseColor } from "../../functions/parseColor";
import { Container, ContainerBox } from "../Content/content";

export function Episode({title, position}){
  const containerConfig = `
    width:100px;
    height: max-content;
    flex-direction:column;
  `
  return (
    <Container config={containerConfig}>
      <ColorBlock color={parseColor(title)} > <h3>{position+1}</h3> </ColorBlock>
      <H3> {title}</H3>
    </Container>
  )
}

const ColorBlock = styled(ContainerBox)`
  width:100px;
  height:100px;
  background-color: ${({color})=>color};
  h3{
    font-family: 'Inter', sans-serif;
    font-size:28px;
    font-weight:bold;
    color:#000;
    }

`
export const H3 = styled.h3`
  margin-top:28px;
  font-family: 'Inter', sans-serif;
  font-size:28px;
  font-weight:bold;
  color:white;
`