export default {
  combinarTratamentoEDosagem() {
	const tratamentos = get_animal_tratamento_medico.data.data || [];
	const dosagens = get_possuis.data.data || [];

	//const tratamentosComDosagens = combinarTratamentoEDosagem(tratamentos, dosagens);
  // Criar um mapa dos tratamentos por ID para facilitar o acesso
  const tratamentosPorId = tratamentos.reduce((map, tratamento) => {
    map[tratamento.id] = tratamento;
    return map;
  }, {});

  // Mapear as dosagens pelos IDs dos tratamentos e adicionar ao tratamento correspondente
  dosagens.forEach(dosagem => {
    const tratamentoId = dosagem.tratamento_medico.id;
    const tratamento = tratamentosPorId[tratamentoId];

    if (tratamento) {
      if (!tratamento.dosagens) {
        tratamento.dosagens = [];
      }

      tratamento.dosagens.push({
        id: dosagem.id,
        prescricao: dosagem.prescricao,
        dosagem: dosagem.dosagem,
        // Adicionar outros campos da dosagem conforme necessário
      });
    }
  });

  return tratamentos;
},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}