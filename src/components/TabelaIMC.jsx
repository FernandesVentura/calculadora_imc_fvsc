import React from 'react';

const TabelaIMC = () => {
    const dados = [
        { faixa: 'Menor que 18,5', classificacao: 'Abaixo do peso' },
        { faixa: '18,5 - 24,9', classificacao: 'Peso normal' },
        { faixa: '25 - 29,9', classificacao: 'Sobrepeso' },
        { faixa: '30 - 34,9', classificacao: 'Obesidade grau 1' },
        { faixa: '35 - 39,9', classificacao: 'Obesidade grau 2' },
        { faixa: '40 ou mais', classificacao: 'Obesidade grau 3' },
    ];

    return (
        <div>
            <h2>Tabela de Classificação do IMC</h2>
            <table>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            <td>{item.faixa}</td>
                            <td>{item.classificacao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaIMC;
