import React, { useState } from 'react';

const FormularioIMC = ({ onCalcular }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!altura || !peso) {
            alert("Preencha todos os campos!");
            return;
        }

        const alturaEmMetros = parseFloat(altura) / 100; 
        onCalcular(alturaEmMetros, parseFloat(peso));
    };

    return (
        <form className='form-model' onSubmit={handleSubmit}>
            <div>
                <label>Altura (em centímetros): </label><br />
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="Ex: 175"
                />
            </div>
            <div>
                <label>Peso (em kg): </label> <br />
                <input
                    type="number"
                    step="0.1"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Ex: 70.5"
                />
            </div>
            <button type="submit">Calcular IMC</button>
        </form>
    );
};

export default FormularioIMC;
