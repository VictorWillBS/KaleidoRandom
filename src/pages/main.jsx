import styled from "styled-components"
import EpisodesBox from "../components/episodesBox"

export function MainPage(){
  return(
    <Background>
      <EpisodesBox></EpisodesBox>
    </Background>
  )
}
const Background= styled.div` 
  width:100vw;
  height: 100vh;
  background-color:#171717;
`