export default {

	myFun1 () {

  const tratamentosMedicosPorId = get_animal_tratamento_medico.data.data.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

  // Array para armazenar os nomes das doenças correspondentes
  const nomesDasDoencas = [];

  // Iterar sobre os resultados de get_e_causado
  get_e_causado.data.data.forEach(item => {
    // Verificar se há um tratamento médico correspondente no array de tratamentos médicos
    const tratamentoMedico = tratamentosMedicosPorId[item.tratamento_medico.id];

    // Se houver um tratamento médico correspondente, obter o nome da doença
    if (tratamentoMedico) {
      const nomeDaDoenca = item.doenca.nome;
      nomesDasDoencas.push(nomeDaDoenca);
    }
  });

  return nomesDasDoencas;
	}
}