import styled from "styled-components";
import ImgSpaceCard from '../../img/spacecard.png'

export const DivListTrips = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 2% 0;
  margin-bottom: 10%;

  h2{
      text-align: center;
      margin: 2% 0;
      color: white;
  }

  @media (max-width: 600px){
    margin-bottom: 100%;
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
  gap: 2%;
  row-gap: 5%;
  width: 80%;

  @media (max-width: 600px){
    grid-template-columns: 1fr;
    margin: 5% 0;
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
