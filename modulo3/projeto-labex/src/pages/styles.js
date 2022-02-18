import styled from "styled-components";
import ImgSpaceCard from '../img/spacecard.png'
import SpaceHome from '../img/spaceHome.jpeg'


//HOME
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

//Lista de Viagens

export const DivListTrips = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 0;

  h2{
      text-align: center;
      margin: 2% 0;
      color: white;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;

  button{
      margin: 0 4%;
  }

  @media (max-width: 600px){
    width: 100%;
  }
`

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 2%;
  width: 80%;

  @media (max-width: 600px){
    grid-template-columns: 1fr;
    margin-bottom: 20%;
    height: 100%;
  }
`;

export const CardTrips = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 1px 1px 10px cyan;
  border-radius: 2%;
  padding: 2%;
  width: 100%;
  height: 100%;
  background-image: url(${ImgSpaceCard});
  color: white;
`;
