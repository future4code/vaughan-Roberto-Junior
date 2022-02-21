import styled from "styled-components";
import GifLoadingGet from "../../img/gifloading.gif";

const IMGGifLoading = styled.div`
   background-color: aquamarine;

  @media (max-width: 600px){
      img{
          width: 20%;
      }
  }
`;

export default function LoadingGitGet() {
  return (
    <IMGGifLoading>
      <img src={GifLoadingGet} />
    </IMGGifLoading>
  );
}
