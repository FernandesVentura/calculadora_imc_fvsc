import React from 'react';

const ResultadoIMC = ({ imc, classificacao }) => {
    if (!imc) return null;

    return (
        <div>
            <h2>Resultado:</h2>
            <p><strong>IMC:</strong> {imc.toFixed(2)}</p>
            <p><strong>Classificação:</strong> {classificacao}</p>
            <hr />
        </div>
        
    );
};

export default ResultadoIMC;
