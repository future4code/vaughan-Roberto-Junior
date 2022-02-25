import styled from "styled-components";

export const DivMasterPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom, #20B2AA, black);
  width: 100%;

  nav{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 2%;
    position: sticky;
    top: 0;
    z-index: 1; 
    box-shadow: 0 8px 32px 0 rgba( 31, 45, 100, 0.80 );

  }

  .card-header{
    display: flex;
    justify-content: space-between;
  }
`

export const DivPostPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    padding: 2% 0;

    box-shadow: 2px 2px 10px black;
    background: rgba(75,0,130, 0.15);


    .input-group-text{
      width: 31%;
      font-size: 1em;
    }

    form{
      width: 80%;
    }

    form > button{
        width: 100%;
    }

    @media (max-width: 600px) {
      width: 100%;

      .input-group-text{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-weight: bold;
      text-align: center;
      }
    }

    .btn-dark{
      width: 80%;
    }

`

export const DivFooterPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  height: 2vh;

  p{
    margin-top: auto;
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  i:hover {
        cursor: pointer;
      }
`

export const FeedDetail = styled.div`
  margin: 2% 0;
`