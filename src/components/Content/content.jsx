import styled from "styled-components";

export function Container ({config,children}){
return <ContainerBox config={config }>{children}</ContainerBox>
}

export const ContainerBox = styled.article`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  ${props=>props.config};
`