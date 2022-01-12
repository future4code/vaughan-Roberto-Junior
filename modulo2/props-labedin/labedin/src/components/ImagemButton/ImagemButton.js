import React from 'react';

function ImagemButton(props) {
    return (
        <>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </> 

    )
}

export default ImagemButton;