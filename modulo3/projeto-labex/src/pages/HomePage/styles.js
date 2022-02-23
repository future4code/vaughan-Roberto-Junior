import styled from "styled-components";
import SpaceHome from '../../img/spaceHome.jpeg'


export const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-image: url(${SpaceHome});
  background-size: cover;

    button {
      margin: 10% 0;
      width: 60%;
      height: 50px;
    }
  

  h1 {
    color: cyan;
    text-shadow: 1px 1px 5px orange;
    font-size: 4em;
  }

  b{
      color: orange;
  }
`;

export const BottonImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;

  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export const ImgLogo = styled.img`
  width: 50%;
`