export default {
	myVar1: [],
	myVar2: {},
	adicionarNomeDoenca( getAnimal = get_animal_tratamento_medico ,getCausado = get_e_causado) {
// Função para adicionar o nome da doença ao retorno do get_animal_tratamento_medico

  // Mapear o array de dados do get_animal_tratamento_medico
  const resultado = getAnimal.data.data.map((item) => {
    // Encontrar a correspondência no array de dados do get_e_causado pelo id do tratamento médico
    const correspondenciaECausado = getCausado.data.data.find(
      (itemECausado) => itemECausado.tratamento_medico.id === item.tratamento_medicos[0].id
    );

    // Adicionar o nome da doença ao objeto
    if (correspondenciaECausado) {
      item.nome_doenca = correspondenciaECausado.doenca.nome;
    }

    return item;
  });

  // Retornar o resultado com o nome da doença adicionado
  return {
    data: resultado,
    meta: getAnimal.meta
  };

	},
	async adicionarInformacoesTratamento( resultadoComNomeDoenca = InfoPainel.adicionarNomeDoenca(get_animal_tratamento_medico,get_e_causado).data, get_possui = get_possuis) {

  // Mapear o array de dados do resultadoComNomeDoenca
  const resultadoFinal = resultadoComNomeDoenca.data.map((item) => {
    // Encontrar correspondências no array de dados do getPossuis pelo id do tratamento médico
    const correspondenciasPossuis = get_possui.data.filter(
      (itemPossuis) => itemPossuis.tratamento_medico.id === item.tratamento_medicos[0].id
    );

    // Adicionar informações ao objeto
    item.tratamento_medicos[0].informacoes_medicamento = correspondenciasPossuis.map((itemPossuis) => {
      return {
        dosagem: itemPossuis.dosagem,
        data_inicio: itemPossuis.data_inicio,
        data_fim: itemPossuis.data_fim,
        prescricao: itemPossuis.prescricao,
        nome_medicamento: itemPossuis.medicamento.nome,
      };
    });

    return item;
  });

  // Retornar o resultado final com as informações adicionadas
  return {
    data: resultadoFinal,
    meta: resultadoComNomeDoenca.meta
  };



	}
}