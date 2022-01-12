import React from 'react';

function CardPequeno(props) {

    return (
        <div>
               <img src={ props.imagem } />
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
        </div>
    )
}

export default CardPequeno;