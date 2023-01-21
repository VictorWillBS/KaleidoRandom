import { useState } from "react";
import styled from "styled-components";
import EpisodesBox from "../components/Episodes/episodesBox";
import { RandomizeButton } from "../components/Button/randomizeButton";
import { Title } from "../components/Title/title";
import { generateOrder } from "../functions/generateOrder";
import { useRefreshList } from "../hooks/useRefreshList";

export function MainPage() {
  const [epList, setEpList] = useState([]);
  const [update, setUpdate] = useState(true);
  useRefreshList(setEpList, generateOrder, update);
  return (
    <Body>
      <Container>
        <Title>Sua ordem de episodios é: </Title>
        <EpContainer>
          <EpisodesBox epList={epList} />
        </EpContainer>
        <RandomizeButton
          update={update}
          setUpdate={setUpdate}
        ></RandomizeButton>
      </Container>
    </Body>
  );
}
const Body = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: #171717;
`;

const EpContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  padding-bottom: 30px;
  @media screen and (min-width: 600px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 60px 60px 0 60px;
`;
