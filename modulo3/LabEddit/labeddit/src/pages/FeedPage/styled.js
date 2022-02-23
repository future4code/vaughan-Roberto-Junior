import styled from "styled-components";

export const DivFeed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  background-color: rgb(122, 117, 166);

  form{
    width: 80%;
    margin-top: 5%;

    input {
      margin: 2% 0;
    }
  }
`

export const DivComentButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      margin: 0 10%;

      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const GridPosts = styled.div`
   display: flex;
   flex-direction: column;
`;

export const CardFeedPost = styled.div`
  margin: 5% 0;
  width: 8%;
`
