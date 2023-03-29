import { useState } from 'react';

const nomes = ['Ana', 'Bruno', 'Carla', 'Daniel', 'Eduardo', 'Fernanda'];

export function SorteadorDeNomes() {
  const [nomesSorteados, setNomesSorteados] = useState([]);

  function sortearNome() {
    const nomesNaoSorteados = nomes.filter(nome => !nomesSorteados.includes(nome));
    if (nomesNaoSorteados.length === 0) {
      setNomesSorteados([]);
    } else {
      const nomeSorteado = nomesNaoSorteados[Math.floor(Math.random() * nomesNaoSorteados.length)];
      setNomesSorteados([...nomesSorteados, nomeSorteado]);
    }
  }

  return (
    <div>
      {nomesSorteados.length === nomes.length ? (
        <p>Todos os nomes foram sorteados!</p>
      ) : (
        <p>Nome sorteado: {nomesSorteados[nomesSorteados.length - 1] || 'Nenhum'}</p>
      )}
      <button onClick={sortearNome}>Sortear outro nome</button>
    </div>
  );
}

export default SorteadorDeNomes;
