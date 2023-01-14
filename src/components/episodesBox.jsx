import styled from "styled-components"

export default function EpisodesBox(){
  
  return(
    <ContentBox>
      <BlockBox>
      <div >
      <ColorBlock>"a"</ColorBlock>
      <h2>1</h2>
      </div>
      <div >
      <ColorBlock>"a"</ColorBlock>
      <h2>2</h2>
      </div>  <div >
      <ColorBlock>"a"</ColorBlock>
      <h2>3</h2>
      </div>  <div >
      <ColorBlock>"a"</ColorBlock>
      <h2>4</h2>
      </div>  <div >
      <ColorBlock>"a"</ColorBlock>
      <h2>5</h2>
      </div>  <div >
      <ColorBlock>"a"</ColorBlock>
      <h2>6</h2>
      </div>  <div >
      <ColorBlock>"a"</ColorBlock>
      <h2>7</h2>
      </div>  <div >
      <ColorBlock>"a"</ColorBlock>
      <h2>8</h2>
      </div>  
      </BlockBox>
    </ContentBox>
  )
}

const ContentBox = styled.section`
  width:100%;
  height:100%;
  display:flex;
  padding:50px 60px 0 60px;
  align-items:center;
  justify-content:center;
  background-color: green;
  overflow:scroll;
  @media (max-height:850px) and (max-width:350px){
    padding-top:300px;
  }
`

const BlockBox = styled.section`
max-width:1100px;
width:100%;
display:grid;
grid-row-gap:20px;
justify-items: center;
background-color: blue;
grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));

`

const ColorBlock = styled.article`
  width:100px;
  height:100px;
  background-color: red;
`