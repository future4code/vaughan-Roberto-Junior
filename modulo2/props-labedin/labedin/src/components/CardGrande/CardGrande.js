import React from 'react';

function CardGrande(props) {
    return (
        <>
            <img src={ props.imagem } />
            <div className="bigcard-container">
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </>
    )
}

export default CardGrande;