import styled from "styled-components";
import GifInit from "../../img/gifinit.gif";

const IMGGif = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px){
      img{
          width: 80%;
      }
  }
`;

export default function DivInit() {
  return (
    <IMGGif>
      <img src={GifInit} />
    </IMGGif>
  );
}
