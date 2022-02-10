import { MatchsList } from "../styles";

function MatchArea(props) {
  return (
    <>
      {props.yourMatches()}

      <button
        onClick={() => props.changeScreen()}
        type="button"
        className="btn btn-dark"
      >
        Retornar
      </button>
      {props.matchs.length === 0 ? (
        <h5>Nenhum Match ainda =( continue tentando</h5>
      ) : (
        props.matchs.map((item) => {
          return (
            <MatchsList key={item.id}>
              <img src={item.photo} />
              {item.name}
            </MatchsList>
          );
        })
      )}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => props.clearMatches()}
      >
        Resetar
      </button>
    </>
  );
}

export default MatchArea;
