import styled from "styled-components";
import { Container } from "../Content/content";

export function Title({ children }) {
  return (
    <Container config={"height: initial;"}>
      <StyledH1>{children}</StyledH1>
    </Container>
  );
}

const StyledH1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 50px;
  color: white;
`;
