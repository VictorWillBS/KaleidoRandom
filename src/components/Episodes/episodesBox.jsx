import { useEffect, useState } from "react";
import styled from "styled-components";
import { Episode } from "./episode";

export default function EpisodesBox({ epList, historyEpList }) {
  const [renderList, setRenderList] = useState([]);
  useEffect(() => {
    setRenderList(epList);
  }, [epList]);
  useEffect(() => {
    setRenderList(historyEpList);
  }, [historyEpList]);
  return (
    <ContentBox>
      <Grid>
        {renderList.map((title, position) => {
          return <Episode key={position} position={position} title={title} />;
        })}
      </Grid>
    </ContentBox>
  );
}

const ContentBox = styled.section`
  width: 100%;
  display: flex;
  margin-top: 40px;
  align-items: start;
  justify-content: center;
`;

const Grid = styled.section`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-row-gap: 20px;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
`;
