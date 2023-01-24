import { useEffect, useState } from "react";
import styled from "styled-components";
import EpisodesBox from "../components/Episodes/episodesBox";
import { RandomizeButton } from "../components/Button/randomizeButton";
import { Title } from "../components/Title/title";
import { generateOrder } from "../functions/generateOrder";
import { useRefreshList } from "../hooks/useRefreshList";
import { Navbarr } from "../components/Navbarr/navbarr";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useUpdateLocalStorage } from "../hooks/useUpdateLocalStorage";
import HistoryBox from "../components/historyBox/historyBox";

export function MainPage() {
  const [epList, setEpList] = useState([]);
  const [update, setUpdate] = useState(true);
  const [historyActivity, setHistoryActivity] = useState("off");
  const [historyEpList, setHistoryEpList] = useState([]);
  const [storedValue, setValue] = useLocalStorage("history", epList);
  useRefreshList(setEpList, generateOrder, update);
  useUpdateLocalStorage(epList, storedValue, setValue, 8, epList);

  return (
    <Body>
      <Navbarr
        historyActivity={historyActivity}
        setHistoryActivity={setHistoryActivity}
      />
      <HistoryBox
        historyActivity={historyActivity}
        historyList={storedValue}
        setHistoryEpList={setHistoryEpList}
      />
      <Container>
        <Title>Sua ordem de episodios é: </Title>
        <EpContainer>
          <EpisodesBox epList={epList} historyEpList={historyEpList} />
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
  padding: 0 60px 0 60px;
  @media (max-width: 450px) {
    padding-top: 60px;
  }
`;
