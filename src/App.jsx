import React, { useState } from 'react';
import FormularioIMC from './components/FormularioIMC';
import ResultadoIMC from './components/ResultadoIMC';
import TabelaIMC from './components/TabelaIMC';
import './App.css';

function App() {
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (altura, peso) => {
    const resultado = peso / (altura * altura);
    setImc(resultado);
    setClassificacao(classificarIMC(resultado));
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    else if (imc < 24.9) return 'Peso normal';
    else if (imc < 29.9) return 'Sobrepeso';
    else if (imc < 34.9) return 'Obesidade grau 1';
    else if (imc < 39.9) return 'Obesidade grau 2';
    else return 'Obesidade grau 3';
  };

  return (
    <div className="container">
      <h1 className='main-title'>Calculadora de IMC</h1>
      <FormularioIMC onCalcular={calcularIMC} />
      <div className="resultado">
        <ResultadoIMC imc={imc} classificacao={classificacao} />
      </div>
      <TabelaIMC />
    </div>
  );
}

export default App;
