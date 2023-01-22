import styled from "styled-components";
import { History } from "./history";

export default function HistoryBox({
  historyActivity,
  historyList,
  setHistoryEpList,
}) {
  return (
    <ContentBox className={historyActivity}>
      <Grid>
        {historyList.length &&
          historyList.map((historyEpList, index) => {
            return (
              <History
                key={index}
                index={index}
                historyLength={historyList.length}
                historyEpList={historyEpList}
                setHistoryEpList={setHistoryEpList}
              />
            );
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
  &&.off {
    display: none;
  }
`;

const Grid = styled.section`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-row-gap: 20px;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
`;
