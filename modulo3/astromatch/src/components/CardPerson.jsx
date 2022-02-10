import accept from "../img/accept.png";
import del from "../img/del2.png";
import { BottonsLike, ButtonMatch, TitleButton, AgePerson} from "../styles";
import TinderCard from "react-tinder-card";
import match from "../img/match.png";
import { useState } from "react";

function CardPerson(props) {


    // const [profiles, setProfiles] = useState(props.profiles);

    const profiles = props.profiles;

  return (
    <>
      {profiles.length === 0 ? (
        <h1>Carregando ..</h1>
      ) : (
        <>
          <TitleButton>
            <h2>{profiles.name}</h2>
            <ButtonMatch src={match} onClick={() => props.changeScreen()} />
          </TitleButton>

          <TinderCard onSwipe={props.onSwipe} preventSwipe={["right", "left"]}>
            <img src={profiles.photo} />
          </TinderCard>
          <AgePerson>{profiles.age} Anos</AgePerson>
          <h5>{profiles.bio}</h5>
          <BottonsLike>
            <img
              src={accept}
              onClick={() => {
                props.onSwipe("left");
              }}
            />
            <img src={del} onClick={() => props.requestPerson()} />
          </BottonsLike>
        </>
      )}
    </>
  );
}

export default CardPerson;
